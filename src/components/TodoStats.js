// Packages
import React from 'react';
import PropTypes from 'prop-types';

// Styles
import '../App.css';

const TodoStats = (props) => {
  return (
    <div className="TodoStats">
      <p className="stats"><span>{props.list.length}</span> Tasks</p>
      <p className="stats"><span>{props.finished}</span> Completed Tasks</p>
      <p className="stats-percent"><span>{props.percent}%</span> Done</p>
    </div>
  );
};

TodoStats.propTypes = {
    list: PropTypes.array,
    finished: PropTypes.number,
    percent: PropTypes.number
}

export default TodoStats;
