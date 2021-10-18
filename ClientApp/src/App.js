import React from 'react';
import { OrderPage } from './components/OrderPage';
import { Menu } from './components/Menu';
import { OrderList } from './components/OrderList';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Menu />
                </Route>
                <Route path="/order">
                    <OrderPage />
                </Route>
                <Route path="/orderlist">
                    <OrderList />
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
