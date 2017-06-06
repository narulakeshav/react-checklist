import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// Gets Item from localStorage
let getItem = (val) => {
  return JSON.parse(localStorage.getItem(val));
};
const props = {
  todos: getItem('todos'),
  finished: getItem('finished'),
  done: getItem('done')
};

ReactDOM.render(<App {...props}/>, document.getElementById('app'));
