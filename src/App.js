import React, { useState } from "react";
import { Link, Route, Switch } from "react-router-dom";
import PizzaForm from "./Components/PizzaForm";

const App = () => {

  const [pizzaOrders, setOrders] = useState([]);

  const submitOrder = (newOrder) => {
    setOrders([...pizzaOrders, newOrder]);
  }

  return (
    <div>
        <header>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/pizza" id="order-pizza">Order Pizza</Link>
          </nav>
        </header>
        <Switch>
          <Route exact path ="/">
            <h1>Pizza Baby!</h1>
            <p>I'm a Pizza Fanatic so I built a Pizza ordering App!</p>
            <p>Start ya Pizza Order</p>
          </Route>
          <Route exact path="/pizza/:id">
            <PizzaForm submitOrder = {submitOrder}></PizzaForm>
          </Route>
          <Route path="/pizza">
            <PizzaForm submitOrder = {submitOrder}></PizzaForm>
          </Route>
        </Switch>
    </div>
  );
};
export default App;
