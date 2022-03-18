import React from 'react';
import ReactDOM from 'react-dom';
import './i18n';
import App from './App';
import './index.scss'
import Load from './components/Load';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
ReactDOM.render(
  <React.StrictMode>
    <App />
    <Load />
  </React.StrictMode>,
  document.getElementById('root')
);


