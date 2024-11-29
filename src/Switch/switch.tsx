import React, { useState, useMemo, forwardRef, CSSProperties, ReactNode, MouseEventHandler } from 'react';
import cs from 'classnames';

// 定义 SwitchProps 类型
type SwitchProps = {
  style?: CSSProperties;
  size?: 'small' | 'middle' | 'large';
  className?: string;
  disabled?: boolean;
  small?: boolean;
  defaultChecked?: boolean;
  checkedChildren?: ReactNode;
  unCheckedChildren?: ReactNode;
  loading?: boolean;
  handleChange?: (checked: boolean) => void;
};

// 定义主题颜色类型
type ThemeProps = {
  globalColor?: string;
};

// 使用来自样式文件的全局变量替代动态获取主题颜色
const getRenderColor = (isDark: boolean, globalColor?: string): string => {
  // 如果传入了 globalColor，则使用它，否则使用默认颜色
  return globalColor || (isDark ? '#3C7EFF' : '#325DFF');
};

const Switch = (props: SwitchProps & ThemeProps, ref: any) => {
  const {
    disabled,
    className,
    style,
    defaultChecked = false,
    size = 'middle',
    checkedChildren,
    unCheckedChildren,
    loading,
    handleChange,
    globalColor,
  } = props;

  const [switchStatus, setSwitchStatus] = useState<boolean>(defaultChecked);
  const [switchWidth, setSwitchWidth] = useState<number>(size ? 28 : 40);
  const [switchChildWidth, setSwitchChildWidth] = useState<number>(0);

  // 使用 localStorage 中的主题来判断当前是否为暗色模式
  const theme = window.localStorage.getItem('dumi:prefers-color');

  const classNames = cs(className, 'concis-switch');

  // 更新 switch 宽度和子元素宽度
  const switchStyle = useMemo(() => {
    return {
      '--switch-width': `${switchWidth}px`,
      '--switch-height': `${size ? 16 : 24}px`,
      '--dot-transformX': switchStatus
        ? `${switchWidth - 16 - (size ? -2 : 4)}px`
        : '4px',
      '--dot-transformY': size ? '2.5px' : '4px',
      '--dot-size': `${size ? '12px' : '16px'}`,
      '--child-transform': switchStatus
        ? typeof checkedChildren === 'string'
          ? `4px`
          : '8px'
        : `${switchWidth - switchChildWidth - (typeof checkedChildren === 'string' ? 6 : -2)}px`,
      '--switch-bg': switchStatus
        ? getRenderColor(theme === 'dark', globalColor)
        : 'rgba(201,205,212,1)',
      '--disabled': disabled || loading ? 'not-allowed' : 'pointer',
      '--opacity': disabled || loading ? '0.6' : '1',
    };
  }, [switchStatus, disabled, switchWidth, size, globalColor, theme, checkedChildren, switchChildWidth]);

  // 切换开关状态
  const toggleSwitch = () => {
    if (disabled || loading) return;
    setSwitchStatus((prevStatus) => {
      const newStatus = !prevStatus;
      handleChange && handleChange(newStatus);
      return newStatus;
    });
  };

  // 获取子元素宽度
  const getChildWidth = () => {
    if (checkedChildren && unCheckedChildren && document.querySelector('.concis-switch-child')) {
      const childElement = document.querySelector('.concis-switch-child') as HTMLElement;
      setSwitchChildWidth(childElement.clientWidth);
      setSwitchWidth(childElement.clientWidth + 30);
    }
  };

  React.useEffect(() => {
    getChildWidth();
  }, [checkedChildren, unCheckedChildren]);

  return (
    <div
      className={classNames}
      style={{ ...style, ...(switchStyle as React.CSSProperties) }}
      onClick={toggleSwitch}
      ref={ref}
    >
      <div className="concis-switch-dot">{loading}</div>
      {(checkedChildren || unCheckedChildren) && (
        <div className="concis-switch-child">
          {switchStatus ? checkedChildren : unCheckedChildren}
        </div>
      )}
    </div>
  );
};

// export default forwardRef<unknown, SwitchProps & ThemeProps>(Switch);
export default Switch;
export type { SwitchProps };