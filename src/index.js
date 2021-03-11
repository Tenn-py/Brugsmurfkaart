import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Image from './image'
import Weekrooster from './weekroosters';
import Droostertime from './roosters/droostertime'
import Login from './login/login'
import DevTools from './login/devTools'
import Createing from './login/DevTools/createm'
import Home from './home'

ReactDOM.render(
  <React.StrictMode>
    <DevTools />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
