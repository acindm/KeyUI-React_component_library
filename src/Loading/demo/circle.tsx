import { Space, Loading } from 'KeyUI'
import React from 'react'

export default () => (
  <Space direction="horizontal">
    <Loading style={{ width: 30, height: 30 }} color='#6debf3' />
    <Loading style={{ width: 45, height: 45 }} color='#6debf3'/>
    <Loading style={{ width: 60, height: 60 }} color='#6debf3'/>
  </Space>
)