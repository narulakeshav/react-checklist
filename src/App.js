import React, {Component} from 'react';
import AddItemBox from './components/AddItemBox';
import ItemsList from './components/ItemsList';
import './App.css';

// HOW IT WORKS
// 1. Types in the input box
// 2. User presses Enter
// 3. At 'ENTER', grab the input value
// 4. Push it to the App "items" state array
// 5. Re-render the ItemList component
// 6. User can see the change
// use binds the addItem event so it changes the state in this comp

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoList: props.todos || [],
            finished: props.finished || 0
        };
    }

    render() {
        return (
            <div className="App">
                <h2>Todo List</h2>
                <p className="stats"><span>{this.state.todoList.length}</span> Tasks</p>
                <p className="stats"><span>{this.state.finished} </span> Completed</p>
                <AddItemBox addNewItem={this._addItem.bind(this)}/>
                <ItemsList
                    items={this.state.todoList}
                    completeTask={this._completeTask.bind(this)}
                    updateStorage={this._updateFromLocalStorage.bind(this)} />
            </div>
        );
    }

    // Adds item to app's 'items' state
    _addItem(item) {
        let listItems = this.state.todoList;
        let task = { task: item, completed: false };
        listItems.push(task);
        this.setState({todoList: listItems});
        this._countFinishedTasks();
    }

    // Marks a task as completed
    _completeTask(task, status) {
        let listItems = this.state.todoList;
        for (var i = 0; i < listItems.length; i++) {
            if (listItems[i] === task) {
                listItems[i].completed = status;
                break;
            }
        }
        this._countFinishedTasks();
    }

    // Counts Completed tasks and updates state and localstorage object
    _countFinishedTasks() {
        let listItems = this.state.todoList;
        let finished = 0;
        for (var i = 0; i < listItems.length; i++) {
            if (listItems[i].completed) {
                finished++;
            }
        }
        localStorage.setItem('finished', finished);
        this.setState({ finished });
        this._updateFromLocalStorage();
    }

    // Stores todoList in localStorage object
    _updateFromLocalStorage() {
        localStorage.setItem('todos', JSON.stringify(this.state.todoList));
    }
}

export default App;
