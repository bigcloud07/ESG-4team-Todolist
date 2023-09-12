import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from 'styled-components';
import App from './App';
import DateTimeComponent from './DateTimeComponent';







const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <h1>My Today's</h1>
    <h1>Report</h1>
    <DateTimeComponent/>
    <App/>

    
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
