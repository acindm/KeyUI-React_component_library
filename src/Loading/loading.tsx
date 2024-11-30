import React, { useCallback, forwardRef } from 'react';
import classNames from 'classnames'; // 导入 classNames
import './loading.scss'; // 引入基本样式
import Icon from '../Icon/icon'; // 导入 Icon 组件

// SkeletonCpns 组件
type SkeletonProps = {
  className?: string;
  loading?: boolean;
  title?: boolean;
  avatar?: boolean;
  row?: number;
  width?: Array<string | number>;
  size?: number;
};

// 这里将组件命名为 SkeletonCpns
const SkeletonCpns = (props: SkeletonProps, ref: any) => {
  const {
    className,
    loading = true,
    title,
    avatar,
    row = 3,
    width = [],
    size = 40,
  } = props;

  const firstClass = 'skeleton';
  const skeletonClassNames = classNames(className, firstClass); // 使用 classNames

  const lineHeight = useCallback(
    (i: number) => {
      if (width && width.length) {
        if (typeof width[i] === 'string') {
          return {
            width: width[i],
          };
        }
        if (typeof width[i] === 'number') {
          return {
            width: `${width[i]}px`,
          };
        }
      }
      return {};
    },
    [width],
  );

  return loading ? (
    <div
      className={skeletonClassNames} // 使用合并后的类名
      style={{ '--skeleton-container-avatar-size': `${size}px` } as any}
      ref={ref}
    >
      {avatar && <div className={`${firstClass}-avatar`} />}
      <div className={`${firstClass}-container`}>
        {title && <div className={`${firstClass}-container-title`} />}
        {new Array(row).fill('').map((r, i) => (
          <div
            className={`${firstClass}-container-line`}
            style={lineHeight(i)}
            key={i}
          />
        ))}
      </div>
    </div>
  ) : (
    <></>
  );
};

// forwardRef 后将组件命名为 Skeleton
const Skeleton = forwardRef<unknown, SkeletonProps>(SkeletonCpns);

// Loading 组件
export type LoadingProps = {
  show?: boolean;
  className?: string;
  style?: React.CSSProperties;
  color?: string; // 允许传入颜色的string类型
};

const Loading = ({ show, className, style, color }: LoadingProps) => {
  // 创建一个style对象，包含传入的颜色和其他样式
  const customStyle: React.CSSProperties = {
    ...style,
    color: color || style?.color || '#1890ff', // 如果传入color，则使用该颜色，否则使用默认颜色
  };

  return <>{show ? <Icon type="loading" className={classNames('animate-spin', className)} style={customStyle} /> : null}</>;
};

Loading.defaultProps = {
  show: true,
};

export { Skeleton, Loading }; // 导出 Skeleton 和 Loading
