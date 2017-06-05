import React from 'react';
import ItemOptions from './ItemOptions';
import '../App.css';

const Item = (props) => {
    // Marks x task as done
    const _markDone = () => {
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
            <div className="ItemDiv" onClick={_markDone}>
                <p>{name}</p>
            </div>
            <ItemOptions
                item={props.item}
                todoList={props.list}
                updateList={props.updateList}/>
        </li>
    );
};

export default Item;
