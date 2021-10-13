import React from 'react';
import './OrderPage.css';

export const OrderPage = () => {
    return (
        <div>
            <form className='pizzaOrder'>
                <h1>Order pizza:</h1>
                <label for="type">Pizza type:</label>
                {/*<input id="type" type="text"></input>*/}
                <select name="type" id="type">
                    <option value="Quattro Formagi">Quattro Formagi</option>
                    <option value="Diavola">Diavola</option>
                    <option value="Capriciosa">Capriciosa</option>
                    <option value="Carnivora">Carnivora</option>
                </select>

                <label for="firstName">First name:</label>
                <input id="firstName" type="text"></input>

                <label for="lastName">Last name:</label>
                <input id="lastName" type="text"></input>

                <label for="email">Email:</label>
                <input id="email" tpye="text"></input>

                <label for="address">Address:</label>
                <input id="address" type="text"></input>

                <label for="options">Options:</label>
                <input id="options" type="text"></input>
                <button className="orderButton">Send order</button>
            </form>
      </div>            
    );
}