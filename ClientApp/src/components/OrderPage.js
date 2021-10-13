import React, { useState } from 'react';
import './OrderPage.css';

export const OrderPage = () => {
    const [order, setOrder] = useState({
        pizzaType: 'Quattro Formaggi',
        firstName: '',
        lastName: '',
        email: '',
        adress: '',
        options: ''
    });

    const handleChange = (event, type) => {
        const targetValue = event.target.value;
        setOrder((order) => (
            { ...order, [type]: targetValue }
        ));
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

                <label for="address">Address:</label>
                <input value={order.adress} id="address" type="text" onChange={(event) => handleChange(event, 'adress')}></input>

                <label for="options">Options:</label>
                <input value={order.options} id="options" type="text" onChange={(event) => handleChange(event, 'options')}></input>
                <button className="orderButton">Send order</button>
            </form> 
      </div>
    );
}