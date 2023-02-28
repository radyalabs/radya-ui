import React from 'react';
import { Outlet } from 'react-router-dom';

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
      <Outlet />
    </Content>
  </LayoutProvider>
);

export default App;
