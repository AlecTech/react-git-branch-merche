import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HelloStudent from './components/HelloStudent';


ReactDOM.render(
  <React.StrictMode>
   <h1> My Git Test</h1>
   <HelloStudent name="Eboka"/>
   <HelloStudent name="Bob"/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

