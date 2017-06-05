import React from 'react';
import '../App.css';

const ItemOptions = (props) => {
    const _removeItem = (e) => {
        let todoList = props.todoList,
            i = 0,
            found = false;
        // Remove this todo from the array
        while (i < todoList.length && !found) {
            if (props.item === todoList[i]) {
              todoList.splice(i, 1); // remove that item from array
              found = true;
            }
            i++;
        }
        // Then call the update local storage method
        props.updateList(todoList);
    };

    // Return
    return (
        <div className="TaskOptions">
            <button onClick={_removeItem}>
                <span className="fa fa-trash"></span>
            </button>
        </div>
    );
};

export default ItemOptions;
