// Packages
import React from 'react';
import PropTypes from 'prop-types';

// Components and Styles
import ItemOptions from './ItemOptions';
import '../App.css';

const Item = (props) => {
    // Marks x task as done
    const markDone = () => {
        let currentTask = props.item;
        props.completeTask(currentTask);
    };

    // Cache Values
    let name = props.item.task,
        completed = props.item.completed,
        listClass = (completed) ? 'done' : '';

    // return
    return (
        <li className={listClass}>
            <div className="ItemDiv" onClick={markDone}>
                <p>{name}</p>
            </div>
            <ItemOptions
                item={props.item}
                todoList={props.list}
                updateList={props.updateList}
            />
        </li>
    );
};

Item.propTypes = {
    list: PropTypes.array,
    item: PropTypes.object,
    completeTask: PropTypes.func,
    updateList: PropTypes.func
}

export default Item;
