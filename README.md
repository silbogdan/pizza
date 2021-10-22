# Pizza

## Description

This is a basic project, made to be used for a workshop held by me at <b>Microsoft Learn Student Ambassadors</b>
It contains a menu, a page where you can order pizza, and a page that lists the orders in the database.  
It's purpose is to teach basic web concepts using <b>ASP .NET Core, React</b> and <b>SQL Server</b>.

## Deployment

The app has been published to Azure and can be accessed [here](https://pizzaapp0.azurewebsites.net/).

<details><summary>Workshop Cheat Sheet</summary><br/>
 
 ***Scaffolding***
 ```
 Scaffold-DbContext "<ConnectionString>" Microsoft.EntityFrameworkCore.SqlServer -OutputDir Models
 ```

 **OrdersController.cs**
 ```cs
  orderInfo.OrderId = Guid.NewGuid().ToString();
  _context.OrderInfo.Add(orderInfo);
  try
  {
      await _context.SaveChangesAsync();
  }
  catch (DbUpdateException)
  {
      if (OrderInfoExists(orderInfo.OrderId))
      {
          return Conflict();
      }
      else
      {
          throw;
      }
  }
 ```
 
 **App.js**
  ```javascript
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
  ```
  
  **Menu.js**
  ```javascript
  <div className="center">
      <Link className="menu-item" to="/order">Order Pizza</Link>
      <Link className="menu-item" to="/orderlist">Orders list</Link>
  </div>
  ```
  
  **Menu.css**
  ```css
  .center {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      flex-direction: column;
      gap: 8px;   
  }

  .menu-item {
      text-decoration: none;
      color: white;
      background-color: mediumseagreen;
      padding: 20px   ;
      border-radius: 8px;
      text-align: center;
      font-size: 30px;
  }

  .menu-item:hover {
      text-decoration: none;
      color: white;
      background-color: green;
  }
  ```
  
  **OrderPage.js**
  ```javascript
  <div>
    <Link to="/">Back to menu</Link>
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
  ```
  
  **OrderPage.css**
  ```css
  .pizzaOrder {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      padding: 25px;
      display: flex;
      flex-direction: column;
      width: 300px;
      gap: 8px;
      border: 2px solid black;
      border-radius: 6px;
  }

  .orderButton {
      margin-top: 15px;
      height: 50px;
      color: white;
      background-color: mediumseagreen;
      border: 0px;
      border-radius: 6px;
  }
  ```
  
  **OrderItem.js**
  ```javascript
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
  ```
  
  **OrderItem.css**
  ```css
  .item-container {
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin: 10px;
      padding: 20px;
      background-color: #EDB183;
      color: black;
  }

  .item-label {
      color: #F4D8CD;
      padding-right: 8px;
  }

  .item-header {
      color: #3a2e39;
  }

  .order-delete {
      color: white;
      background-color: #F15152;
      border: none;
      padding: 5px;
  }
  ```
</details>
