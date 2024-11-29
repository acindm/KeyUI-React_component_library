import { Switch, Space } from '@indigo-ui/components';
import React from 'react';
import { FC } from 'react';

const App: FC = () => {
  return (
    <Space>
      <Switch defaultChecked checkedChildren="开启" unCheckedChildren="关闭" />
    </Space>
  );
};

export default App;