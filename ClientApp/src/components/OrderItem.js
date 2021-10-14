import React from 'react';
import './OrderItem.css';
import axios from 'axios';

export const OrderItem = (props) => {
    const deleteOrder = async () => {
        await axios.delete('/api/Orders/' + props.id);
        await props.getOrders();
    }

    return (
        <div className="item-container">
            <h1 className="item-header">Order <b>{props.id}</b></h1>
            <p><b className="item-label">Customer: </b> {props.name} ({props.phone})</p>
            <p><b className="item-label">Email: </b> {props.email}</p>
            <p><b className="item-label">Delivery address: </b> {props.address}</p>
            <p><b className="item-label">Item: </b> {props.item}</p>
            <p><b className="item-label">Options: </b> {props.options != '' ? props.options : 'none'}</p>
            <div>
                <button className="order-delete" style={{ marginRight: '10px' }} onClick={async () => await deleteOrder()}>Remove order</button>
            </div>
        </div>
   );
}