import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

let todos = JSON.parse(localStorage.getItem('todos'));
ReactDOM.render(<App todos={todos}/>, document.getElementById('app'));
