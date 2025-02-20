import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import UseForm from './UseForm';
import reportWebVitals from './reportWebVitals';
import UseReducer from './hooks/UseReducer';
import UseRef from './hooks/UseRef';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <UseForm /> */}
    {/* <UseReducer /> */}
    <UseRef />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
