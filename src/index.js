import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

let todos = JSON.parse(localStorage.getItem('todos'));
let finished = JSON.parse(localStorage.getItem('finished'));
ReactDOM.render(<App todos={todos} finished={finished}/>, document.getElementById('app'));
