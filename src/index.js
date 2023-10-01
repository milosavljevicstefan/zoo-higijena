import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App style={{ background: 'linear-gradient(to right, #74ebd5, #ACB6E5)' }}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to measure web vitals, you can uncomment the following line.
// reportWebVitals();
