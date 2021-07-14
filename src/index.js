import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import First from './components/first';
import Second from './components/second';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <First />
    <Second />
  </React.StrictMode>,
  document.getElementById('root')
);
