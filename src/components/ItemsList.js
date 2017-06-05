import React from 'react';
import Item from './Item';
import '../App.css';

const ItemsList = (props) => {
    let todos = props.items;
    const listItem = todos.map((item) => {
        return (
            <Item
                item={item}
                key={todos.indexOf(item)}
                list={todos}
                completeTask={props.completeTask}
                updateList={props.updateList} />
        )
    });
    return (
        <div className="ItemsList">
            <ul>
                {listItem}
            </ul>
        </div>
    )
}

export default ItemsList;
