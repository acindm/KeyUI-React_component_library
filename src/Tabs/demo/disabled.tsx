import { Button, Space, TabItemType, Tabs } from 'KeyUI';
import React from 'react';
import { FC } from 'react';

const App: FC = () => {
  const items: TabItemType[] = [
    {
      label: `Tab 1`,
      key: '1',
      children: `Text Test: This is a test.`,
    },
    {
      label: `Tab 2`,
      key: '2',
      disabled: true,
      children: `Emoji Test: 😘`,
    },
    {
      label: `Tab 3`,
      key: '3',
      children: (        
      <Space direction="vertical">
        <Button>Button Test</Button>
      </Space>),
    },
  ];

  const handleClick = (key: string | number) => {
    console.log(key);
  };

  return <Tabs defaultActiveKey="1" onTabClick={handleClick} items={items} />;
};

export default App;
