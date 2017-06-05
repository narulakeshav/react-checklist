import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// Gets Item from localStorage
let getItem = (val) => {
  return JSON.parse(localStorage.getItem(val));
};

ReactDOM.render(<App todos={getItem('todos')} finished={getItem('finished')}
                    done={getItem('done')}/>, document.getElementById('app'));
