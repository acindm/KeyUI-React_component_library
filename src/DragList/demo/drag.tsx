import React, { FC } from 'react';
import { DragList } from 'KeyUI';

const App: FC = () => {
    const els = new Array(6).fill(0).map((_, i) => (
    <div
      key={i}
      style={{
        height: '50px',
        lineHeight: '50px',
        textAlign: 'center',
        cursor: 'pointer',
        margin: '6px 0',
        background: '#6debf3',
      }}
    >
      {i + 1}
    </div>
  ));

  return (
    <DragList
      onChange={(newVal: any, from: any, to: any) => {
        console.log('onChange: ', newVal, from, to);
      }}
    >
      {els}
    </DragList>
  );
};

export default App;