import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.css';
import './react-app-env.d.ts';
import Router from './routes';



ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
);
