import React, {Component} from 'react';
import AddItemBox from './components/AddItemBox';
import ItemsList from './components/ItemsList';
import TodoStats from './components/TodoStats';
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
            finished: props.finished || 0,
            percentDone: props.done || 0
        };
        this._completeTask = this._completeTask.bind(this);
        this._updateListAfterDeletion = this._updateListAfterDeletion.bind(this);
    }

    render() {
        let todoList = this.state.todoList;
        return (
            <div className="App">
                <h2>Todo List</h2>
                <TodoStats
                    list={todoList}
                    finished={this.state.finished}
                    percent={this.state.percentDone}/>
                <AddItemBox addNewItem={this._addItem.bind(this)}/>
                <ItemsList
                    items={todoList}
                    completeTask={this._completeTask}
                    updateList={this._updateListAfterDeletion} />
            </div>
        );
    }

    // Adds item to app's 'items' state
    _addItem(item) {
        let todoList = this.state.todoList;
        let task = { task: item, completed: false };
        todoList.push(task);
        this.setState({ todoList }, () => {
            this._countFinishedTasks();
        });
    }

    // Marks a task as completed
    _completeTask(task) {
        let listItems = this.state.todoList;
        for (var i = 0; i < listItems.length; i++) {
            if (listItems[i] === task) {
                listItems[i].completed = !listItems[i].completed;
                this._countFinishedTasks();
                break;
            }
        }
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
        this.setState({ finished }, () => {
            localStorage.setItem('finished', finished);
            this._updateFromLocalStorage();
            this._percentCompletion();
        });
    }

    // Stores todoList in localStorage object
    _updateFromLocalStorage() {
        localStorage.setItem('todos', JSON.stringify(this.state.todoList));
    }

    _percentCompletion() {
        let totalTasks = this.state.todoList.length,
            finishedTasks = this.state.finished,
            percentDone = Math.floor((finishedTasks / totalTasks) * 100);
        percentDone = isNaN(percentDone) ? 0 : percentDone;
        this.setState({ percentDone }, () => {
            localStorage.setItem('done', percentDone);
        });
    }

    _updateListAfterDeletion(todoList) {
        this.setState({ todoList }, () => {
            this._countFinishedTasks();
        });
    }
}

export default App;
