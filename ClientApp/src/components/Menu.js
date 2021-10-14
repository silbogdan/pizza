import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

export const Menu = () => {
    return (
        <div className="center">
            <Link className="menu-item" to="/order">Order Pizza</Link>
            <Link className="menu-item" to="/orderlist">Orders list</Link>
        </div>
    );
}