import classNames from 'classnames';
import { CSSProperties, FC, MouseEvent, useState } from 'react';
import './style.scss';
import './styles/index.less'; // 引入基本样式
import React from 'react';
import { TabItemType } from './types';

export type TabsType = 'line' | 'card';

// 为 Button 组件的 props 提供类型检查和类型约束
//参考 /styles/common.less文件
export type TabsProps = {
  className?: string;
  style?: CSSProperties;
  defaultActiveKey: string | number;
  type?: TabsType;
  items: TabItemType[];
  onTabClick?: (key: string | number, e: MouseEvent) => void;
};

const Tabs: FC<TabsProps> = ({ className, style, defaultActiveKey, type = 'line', onTabClick, items }) => {
  const [activeKey, setActiveKey] = useState(defaultActiveKey);
  const tabsClassName = classNames('cobalt-tabs', className);
  const classes = classNames('cobalt-tabs-nav', `nav-${type}`);
  const clickHandler = (key: string | number, e: MouseEvent, disabled: boolean | undefined) => {
    if (!disabled) {
      setActiveKey(key);
      onTabClick?.(key, e);
    }
  };

  return (
    <div className={tabsClassName} style={style}>
      {/* tabs的导航栏 */}
      <ul className={classes}>
        {items.map((item) => (
          <li
            className={classNames('cobalt-tabs-nav-item', {
              active: activeKey === item.key,
              disabled: item.disabled,
            })}
            key={item.key}
            onClick={(e) => {
              clickHandler(item.key, e, item.disabled);
            }}
          >
            {item.label}
          </li>
        ))}
      </ul>

      {/* tabs的内容区域 */}
      <div className="cobalt-tabs-content">
        {items.map((item) => {
          return (
            <div
              key={item.key}
              className={classNames('cobalt-tabs-content-item', {
                hidden: item.key !== activeKey,
              })}
            >
              {item.children}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tabs;
