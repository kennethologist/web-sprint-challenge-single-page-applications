import React, { useState } from "react";
import { Link, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import PizzaForm from "./Components/PizzaForm";

const App = () => {

  const [pizzaOrders, setOrders] = useState([]);

  const submitOrder = (newOrder) => {
    setOrders([...pizzaOrders, newOrder]);
  }

  return (
    <div>
        <Header/>
        <main>
          <Switch>
            <Route exact path ="/">
              <Homepage/>
            </Route>
            <Route exact path="/pizza/:id">
              <PizzaForm submitOrder = {submitOrder}></PizzaForm>
            </Route>
            <Route path="/pizza">
              <PizzaForm submitOrder = {submitOrder}></PizzaForm>
            </Route>
          </Switch>
        </main>
    </div>
  );
};
export default App;
