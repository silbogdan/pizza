import React, { useState } from 'react';
import './OrderPage.css';

export const OrderPage = () => {
    const [order, setOrder] = useState({
        PizzaType: 'Quattro Formaggi',
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        address: '',
        options: ''
    });

    const handleChange = (event, type) => {
        const targetValue = event.target.value;
        setOrder((order) => (
            { ...order, [type]: targetValue }
        ));
    }

    const postOrder = async (event) => {
        event.preventDefault();

        
    }

    return (
        <div>
            <form className='pizzaOrder'>
                <h1>Order pizza:</h1>
                <label for="pizzaType">Pizza type:</label>
                <select value={order.pizzaType} name="pizzaType" id="pizzaType" onChange={(event) => handleChange(event, 'pizzaType')}>
                    <option value="Quattro Formaggi">Quattro Formaggi</option>
                    <option value="Diavola">Diavola</option>
                    <option value="Capriciosa">Capriciosa</option>
                    <option value="Carnivora">Carnivora</option>
                </select>

                <label for="firstName">First name:</label>
                <input value={order.firstName} id="firstName" type="text" onChange={(event) => handleChange(event, 'firstName')}></input>

                <label for="lastName">Last name:</label>
                <input value={order.lastName} id="lastName" type="text" onChange={(event) => handleChange(event, 'lastName')}></input>

                <label for="email">Email:</label>
                <input value={order.email} id="email" type="text" onChange={(event) => handleChange(event, 'email')}></input>

                <label for="phone">Phone:</label>
                <input value={order.phone} id="phone" type="text" onChange={(event) => handleChange(event, 'phone')}></input>

                <label for="address">Address:</label>
                <textarea value={order.adress} id="address" style={{ minHeight: '50px' }} type="text" onChange={(event) => handleChange(event, 'adress')}></textarea>

                <label for="options">Options:</label>
                <textarea value={order.options} id="options" style={{ minHeight: '50px' }} type="text" onChange={(event) => handleChange(event, 'options')}></textarea>
                <button className="orderButton" onClick={(event) => postOrder(event)}>Send order</button>
            </form> 
      </div>
    );
}