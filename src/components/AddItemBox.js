import React, {Component} from 'react';
import '../App.css';

class AddItemBox extends Component {
    render() {
        // We use bind(this) to bind the event with the action
        return (
            <div className='AddItemBox'>
                <input type='text' placeholder='Add a task...' onKeyPress={this.onInputEnter.bind(this)}/>
            </div>
        )
    }

    onInputEnter(e) {
        if (e.key === 'Enter') {
            let item = e.target.value;
            // Now add it to the 'items' array state
            this.props.addNewItem(item);
            // On enter, remove the value from the input
            e.target.value = '';
        }
    }
}

export default AddItemBox;
