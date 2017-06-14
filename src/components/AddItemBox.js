// Packages
import React, {Component} from 'react';
import PropTypes from 'prop-types';

// CSS
import '../App.css';

class AddItemBox extends Component {
    render() {
        // We use bind(this) to bind the function within this component
        return (
            <div className='AddItemBox'>
                <input
                    type='text'
                    placeholder='Add a task...'
                    onKeyPress={this.onInputEnter.bind(this)}
                />
            </div>
        );
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

AddItemBox.propTypes = {
    addNewItem: PropTypes.func
}

export default AddItemBox;
