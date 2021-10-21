import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './OrderPage.css';
import '../custom.css';

export const OrderPage = () => {
    const [firstName, setFirstName] = useState('');
    const [pizzaType, setPizzaType] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [deliveryAddress, setDeliveryAddress] = useState('');
    const [options, setOptions] = useState('');

    const sendOrder = (event) => {
        event.preventDefault();

        const order = {
            pizzaType: pizzaType,
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            deliveryAddress: deliveryAddress,
            options: options
        };

        axios.post('/api/Orders', order);
        setFirstName('');
        setLastName('');
        setPizzaType('');
        setEmail('');
        setPhone('');
        setDeliveryAddress('');
        setOptions('');
    }

    return (
        <>
            <Link to="/" className="back-link">Back to menu</Link>
            <div>
                <form className="pizza-order">
                    <label htmlFor="pizzaType">Pizza Type</label>
                    <input id="pizzaType" value={pizzaType} onChange={(event) => setPizzaType(event.target.value)} />

                    <label htmlFor="firstName">First Name</label>
                    <input id="firstName" value={firstName} onChange={(event) => setFirstName(event.target.value)} />

                    <label htmlFor="lastName">Last Name</label>
                    <input id="lastName" value={lastName} onChange={(event) => setLastName(event.target.value)} />

                    <label htmlFor="email">Email</label>
                    <input id="email" value={email} onChange={(event) => setEmail(event.target.value)} />

                    <label htmlFor="phone">Phone</label>
                    <input id="phone" value={phone} onChange={(event) => setPhone(event.target.value)} />

                    <label htmlFor="deliveryAddress">Delivery Address</label>
                    <input id="deliveryAddress" value={deliveryAddress} onChange={(event) => setDeliveryAddress(event.target.value)} />

                    <label htmlFor="options">Options</label>
                    <input id="options" value={options} onChange={(event) => setOptions(event.target.value)} />

                    <button onClick={(event) => sendOrder(event)} className="order-button">Send order</button>
                </form>
            </div>
        </>
    );
};