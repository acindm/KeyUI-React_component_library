import React, { createElement, useRef, useState } from 'react';

// 修改 FixedSizeListProps
type FixedSizeListProps = {
  children: React.ElementType;  // 允许传入一个组件类型
  width?: number;
  height: number;
  itemCount: number;
  itemSize: number;
};

const FixedSizeList: React.FC<FixedSizeListProps> = ({
  children,
  width,
  height,
  itemCount,
  itemSize = 50,
}) => {
  if (!height || !itemCount || !itemSize || typeof children !== 'function') {
    console.error('请按要求设置属性');
    return null;
  }

  const [startIndex, setStartIndex] = useState(0);
  const [startOffset, setStartOffset] = useState(0);
  const [position, setPosition] = useState(
    new Array(itemCount).fill(0).map((_, idx) => ({
      index: idx,
      top: idx * itemSize,
      bottom: (idx + 1) * itemSize,
      height: itemSize,
      isComputed: false,
    }))
  );
  const _endIndex = position.findIndex(
    (i) => i.bottom >= position[startIndex].top + height
  );
  const endIndex = _endIndex > -1 ? _endIndex : position.length - 1;
  const elements = useRef<HTMLElement[]>([]);
  const actualHeight = position[position.length - 1].bottom;

  const getItemStyle = () => {
    return {
      width: '100%',
    };
  };

  const onScroll = (event: any) => {
    const currentEls: HTMLElement[] = Array.from(
      event.target.children[1].children
    );
    currentEls.forEach((_el) => {
      const _index = Number(_el.getAttribute('data-index') || 0);
      elements.current[_index] = _el;
    });
    const scrollTop = event.target.scrollTop;
    const _startIndex = position.findIndex((i) => i.top >= scrollTop);
    setStartIndex(_startIndex);
    setStartOffset(_startIndex >= 1 ? position[_startIndex - 1]?.bottom : 0);
    updatePosition();
  };

  const render = () => {
    const items = [];
    for (let index = startIndex; index <= endIndex; index++) {
      items.push(
        createElement(children, {
          index,
          style: getItemStyle(),
          key: index,
          'data-index': index,  // 传递额外的 data-index 属性
        })
      );
    }
    return items;
  };

  const updatePosition = () => {
    setPosition((_position) => {
      for (let index = startIndex; index < _position.length; index++) {
        if (_position[index].isComputed) break;
        const el = elements.current[index];
        if (!el) break;
        const target = _position[index];
        target.height = el.clientHeight;
        index > 0 && (target.top = _position[index - 1].bottom);
        target.bottom = target.top + target.height;
        target.isComputed = true;
      }
      return _position;
    });
  };

  return (
    <div
      style={{
        position: 'relative',
        overflow: 'auto',
        willChange: 'transform',
        width,
        height,
      }}
      onScroll={onScroll}
    >
      <div style={{ height: actualHeight }} />
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          transform: `translateY(${startOffset}px)`,
        }}
      >
        {render()}
      </div>
    </div>
  );
};

export default FixedSizeList;
