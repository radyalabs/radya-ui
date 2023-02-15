import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes } from 'react-router-dom';

import App from './App';

import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <React.Suspense fallback={<div>Loading</div>}>
        <Routes />
      </React.Suspense>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
