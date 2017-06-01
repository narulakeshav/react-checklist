import React, {Component} from 'react';
import '../App.css';

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDone: false,
            setClass: ''
        };
    }
    render() {
        const item = this.props.name;
        return <li className={this.state.setClass} onClick={this._markDone.bind(this)} >{item}</li>
    }

    _markDone() {
        // Update States
        const markDone = !this.state.isDone;
        const updatedClass = (this.state.setClass === '') ? 'done' : '';
        this.setState({ isDone: markDone, setClass: updatedClass });

        // If done, increment count, else decrement
        (markDone) ? this.props.finish() :  this.props.notFinish();
    }
}

export default Item;
