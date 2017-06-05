import React, {Component} from 'react';
import '../App.css';

class ItemOptions extends Component {
    render() {
        return (
            <div className="TaskOptions">
                <button onClick={this._removeItem.bind(this)}>
                    <span className="fa fa-trash"></span>
                </button>
            </div>
        );
    }

    _removeItem(e) {
        let todoList = this.props.todoList,
            i = 0,
            found = false;
        // Remove this todo from the array
        while (i < todoList.length && !found) {
            if (this.props.item === todoList[i]) {
              todoList.splice(i, 1); // remove that item from array
              found = true;
            }
            i++;
        }
        // Then call the update local storage method
        this.props.updateList(todoList);
    }
}

export default ItemOptions;
