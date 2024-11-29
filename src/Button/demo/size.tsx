import { Button, Space } from '@indigo-ui/components';
import React from 'react';
import { FC } from 'react';

const App: FC = () => {
  return (
    <Space>
      <Button size="small" type="primary">
        small
      </Button>
      <Button type="primary">
        middle
        </Button>
      <Button size="large" type="primary">
        large
      </Button>
    </Space>
  );
};

export default App;