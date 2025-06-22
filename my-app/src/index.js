// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // React 18 使用 createRoot
import './index.css'; // 可選：樣式檔案
import App from './App'; // 主要 App 組件

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);