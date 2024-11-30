import { Button, Space } from 'KeyUI';
import React from 'react';
import { FC } from 'react';

const App: FC = () => {
  return (
    <Space>
      <Button type="primary">Button1</Button>
      <Button type="primary">Button2</Button>
      <Button type="primary">Button3</Button>
    </Space>
  );
};

export default App;
