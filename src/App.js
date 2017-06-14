// Packages
import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Components
import AddItemBox from './components/AddItemBox';
import ItemsList from './components/ItemsList';
import TodoStats from './components/TodoStats';
import './App.css';

// 7:30am on June 13

/*
 * HOW IT WORKS
 * 1. Types in the input box
 * 2. User presses Enter
 * 3. At 'ENTER', grab the input value
 * 4. Push it to the App "items" state array
 * 5. Re-render the ItemList component
 * 6. User can see the change
 * Use binds the addItem event so it changes the state in this comp
 */

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoList: props.todos || [],
            finished: props.finished || 0,
            percentDone: props.done || 0
        };
        this.completeTask = this.completeTask.bind(this);
        this.updateListAfterDeletion = this.updateListAfterDeletion.bind(this);
        this.addItem = this.addItem.bind(this);
    }

    render() {
        let todoList = this.state.todoList;
        return (
            <div className="App">
                <h2>Todo List</h2>
                <TodoStats
                    list={todoList}
                    finished={this.state.finished}
                    percent={this.state.percentDone}
                />
                <AddItemBox addNewItem={this.addItem}/>
                <ItemsList
                    items={todoList}
                    completeTask={this.completeTask}
                    updateList={this.updateListAfterDeletion}
                />
            </div>
        );
    }

    // Adds item to app's 'items' state
    addItem(item) {
        let todoList = this.state.todoList,
            task = {task: item, completed: false};
        todoList.push(task);
        this.setState({todoList}, () => {
            this.countFinishedTasks();
        });
    }

    // Marks a task as completed
    completeTask(task) {
        let listItems = this.state.todoList;
        for (let i = 0; i < listItems.length; i++) {
            if (listItems[i] === task) {
                listItems[i].completed = !listItems[i].completed;
                this.countFinishedTasks();
                break;
            }
        }
    }

    // Counts Completed tasks and updates state and localstorage object
    countFinishedTasks() {
        let listItems = this.state.todoList;
        let finished = 0;
        for (let i = 0; i < listItems.length; i++) {
            if (listItems[i].completed) {
                finished++;
            }
        }
        this.setState({ finished }, () => {
            localStorage.setItem('finished', finished);
            this.updateFromLocalStorage();
            this.percentCompletion();
        });
    }

    // Stores todoList in localStorage object
    updateFromLocalStorage() {
        localStorage.setItem('todos', JSON.stringify(this.state.todoList));
    }

    // Calculates % of completed tasks
    percentCompletion() {
        let totalTasks = this.state.todoList.length,
            finishedTasks = this.state.finished,
            percentDone = Math.floor((finishedTasks / totalTasks) * 100);
        percentDone = isNaN(percentDone) ? 0 : percentDone;
        this.setState({percentDone}, () => {
            localStorage.setItem('done', percentDone);
        });
    }

    // Updates list after deletion of a task
    updateListAfterDeletion(todoList) {
        this.setState({todoList}, () => {
            this.countFinishedTasks();
        });
    }
}

App.propTypes = {
  todos: PropTypes.array,
  finished: PropTypes.number,
  percent: PropTypes.number
}

App.defaultProps = {
  todos: [],
  finished: 0,
  percent: 0
}

export default App;
