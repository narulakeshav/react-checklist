import React from 'react';
import Item from './Item';
import '../App.css';

const ItemsList = (props) => {
    const listItem = props.items.map((item) => {
        return <Item name={item} key={item} finish={props.addToFinish} notFinish={props.removeFromFinish} />
    });
    return (
        <div className="ItemsList">
            <ul>
                {listItem}
            </ul>
        </div>
    )
}

export default ItemsList;
