import { Switch, Space } from 'KeyUI';
import React from 'react';
import { FC } from 'react';

const App: FC = () => {
  return (
    <Space>
      <Switch style={{ marginRight: '10px' }} defaultChecked small />
      <Switch defaultChecked />
    </Space>
  );
};

export default App;