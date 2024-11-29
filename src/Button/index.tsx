import React from 'react';
import classNames from 'classnames';
import { CSSProperties, MouseEventHandler, ReactNode } from 'react';
import './styles/index.less' 

//为 Button 组件的 props 提供类型检查和类型约束
type ButtonProps = {
  style?: CSSProperties;
  className?: string;
  disabled?: boolean;
  size?: 'small' | 'middle' | 'large';
  type?: 'primary' | 'default' | 'danger' | 'link' | 'warning' | 'info' | 'dashed';
  children?: ReactNode;
  ghost?: boolean;
  href?: string;
  circle?: boolean;
  onClick?: MouseEventHandler<HTMLElement>;
};

const Button: React.FC<ButtonProps> = ({
  type = 'default',
  size = 'middle',
  disabled = false,
  children,
  href,
  circle,
  className,
  style,
  onClick,
  ...restProps
}) => {
  const classes = classNames('btn', className, {
    [`btn-${type}`]: type,
    [`btn-${size}`]: size,
    disabled: type === 'link' && disabled,
    circle: type !== 'link' && circle,
  });

  if (type === 'link' && href) {
    return (
      <a className={classes} href={href} {...restProps} style={style} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} disabled={disabled} onClick={onClick} {...restProps} style={style}>
      {children}
    </button>
  );
};

export default Button;
export { ButtonProps };