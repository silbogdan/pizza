import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { OrderItem } from './OrderItem';
import { Link } from 'react-router-dom';

export const OrderList = () => {
    const [orders, setOrders] = useState([]);

    const getOrders = async () => {
        const response = await axios.get('/api/Orders');
        setOrders(response.data);
    };

    useEffect(() => {
        getOrders();
    }, []);

    return (
        <>
            <Link to="/">Back to menu</Link>
            {
            orders.length > 0 ?
                <ul style={{ padding: 0, listStyleType: 'none' }}>
                    {
                        orders.map((order) => <li>
                            <OrderItem
                                id={order.orderId}
                                name={order.firstName + ' ' + order.lastName}
                                phone={order.phone}
                                email={order.email}
                                address={order.deliveryAddress}
                                item={order.pizzaType}
                                options={order.options}
                                getOrders={getOrders}
                            />
                        </li>)
                    }
                </ul >
                :
                <h1>No orders registered</h1>
             }
        </>
    )
}