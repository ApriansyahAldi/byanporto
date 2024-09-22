import React from 'react';
import ReactDOM from 'react-dom/client'; 
import { HashRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container); 
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);