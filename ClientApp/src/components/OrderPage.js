import React, { useState, useEffect } from 'react';
import './OrderPage.css';
import axios from 'axios';

export const OrderPage = () => {
    const [order, setOrder] = useState({
        PizzaType: 'Quattro Formaggi',
        FirstName: '',
        LastName: '',
        Phone: '',
        Email: '',
        DeliveryAddress: '',
        Options: ''
    });

    const [orderStatus, setOrderStatus] = useState('');

    const handleChange = (event, type) => {
        const targetValue = event.target.value;
        setOrder((order) => (
            { ...order, [type]: targetValue }
        ));
    };

    const postOrder = async (event) => {
        event.preventDefault();

        const response = await axios.post('/api/Orders', order);
        setOrder({
            PizzaType: 'Quattro Formaggi',
            FirstName: '',
            LastName: '',
            Phone: '',
            Email: '',
            DeliveryAddress: '',
            Options: ''
        });

        setOrderStatus('Order has been sent');
    };

    return (
        <div>
            <form className='pizzaOrder'>
                <h1>Order pizza:</h1>
                <label for="pizzaType">Pizza type:</label>
                <select value={order.PizzaType} name="pizzaType" id="pizzaType" onChange={(event) => handleChange(event, 'PizzaType')}>
                    <option value="Quattro Formaggi">Quattro Formaggi</option>
                    <option value="Diavola">Diavola</option>
                    <option value="Capriciosa">Capriciosa</option>
                    <option value="Carnivora">Carnivora</option>
                </select>

                <label for="firstName">First name:</label>
                <input value={order.FirstName} id="firstName" type="text" onChange={(event) => handleChange(event, 'FirstName')}></input>

                <label for="lastName">Last name:</label>
                <input value={order.LastName} id="lastName" type="text" onChange={(event) => handleChange(event, 'LastName')}></input>

                <label for="email">Email:</label>
                <input value={order.Email} id="email" type="text" onChange={(event) => handleChange(event, 'Email')}></input>

                <label for="phone">Phone:</label>
                <input value={order.Phone} id="phone" type="text" onChange={(event) => handleChange(event, 'Phone')}></input>

                <label for="address">Address:</label>
                <textarea value={order.DeliveryAddress} id="address" style={{ minHeight: '50px' }} type="text" onChange={(event) => handleChange(event, 'DeliveryAddress')}></textarea>

                <label for="options">Options:</label>
                <textarea value={order.Options} id="options" style={{ minHeight: '50px' }} type="text" onChange={(event) => handleChange(event, 'Options')}></textarea>
                <button className="orderButton" onClick={async (event) => await postOrder(event)}>Send order</button>
            </form>
            <h2 style={{ color: 'green' }}>{orderStatus}</h2>
      </div>
    );
}