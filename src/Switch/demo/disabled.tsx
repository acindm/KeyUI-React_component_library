import { Switch, Space } from 'KeyUI';
import React from 'react';
import { FC } from 'react';

const App: FC = () => {
  return (
    <Space>
      <Switch defaultChecked disabled />
      <Switch  disabled />
    </Space>
  );
};

export default App;