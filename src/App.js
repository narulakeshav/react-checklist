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
    constructor() {
        super();
        this.state = {
            items: [],
            finishedItems: 0
        };
    }

    render() {
        return (
            <div className="App">
                <h2>Todo List</h2>
                <p>Total Tasks: {this.state.items.length} | Completed: {this.state.finishedItems}</p>
                <AddItemBox addNewItem={this._addItem.bind(this)}/>
                <ItemsList
                    items={this.state.items}
                    addToFinish={this._addToFinish.bind(this)}
                    removeFromFinish={this._removeFromFinish.bind(this)}/>
            </div>
        );
    }

    // Adds item to app's 'items' state
    _addItem(item) {
        var listItems = this.state.items;
        listItems.push(item);
        this.setState({items: listItems});
    }
    _addToFinish() {
        this.setState({finishedItems: ++this.state.finishedItems});
    }
    _removeFromFinish() {
        this.setState({finishedItems: --this.state.finishedItems});
    }
}

export default App;
