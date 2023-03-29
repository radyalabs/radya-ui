import React from 'react';
import { Outlet } from 'react-router-dom';

import Tag from '@/components/base/Tag/Tag';
import Content from '@/components/layout/Content';
import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';
import { LayoutProvider } from '@/contexts/LayoutContext';

import './App.scss';

const App = () => (
  <LayoutProvider>
    <Header />
    <Sidebar />
    <Content>
      <Tag color="#fff000">Test</Tag>
      <Outlet />
    </Content>
  </LayoutProvider>
);

export default App;
