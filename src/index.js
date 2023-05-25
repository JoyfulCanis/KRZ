import React from 'react';
import ReactDOM from 'react-dom/client';
import Routes from './components/Routes';

import './styles/index.scss';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>
);
