import React, {Component} from 'react';
import ItemOptions from './ItemOptions';
import '../App.css';

class Item extends Component {
    render() {
        let name = this.props.item.task,
            completed = this.props.item.completed,
            listClass = (completed) ? 'done' : '';
        return (
            <li className={listClass}>
                <div className="ItemDiv" onClick={this._markDone.bind(this)}>
                    <p>{name}</p>
                </div>
                <ItemOptions
                    item={this.props.item}
                    todoList={this.props.list}
                    updateList={this.props.updateList}/>
            </li>
        );
    }

    _markDone() {
        // Update States
        let currentTask = this.props.item;
        this.props.completeTask(currentTask);
    }
}

export default Item;
