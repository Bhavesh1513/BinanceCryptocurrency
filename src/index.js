// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Importing App from the root src
import './index.css'; // If you have any styles

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
