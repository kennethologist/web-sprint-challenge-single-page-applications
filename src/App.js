import React from "react";
import { Link, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div>
        <header>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/pizza">Order Pizza</Link>
          </nav>

          <h1>Pizza Baby!</h1>
          <p>I'm a Pizza Fanatic so I built a Pizza ordering App!</p>
        </header>
        <Switch>
          <Route exact path ="/">
            <p>Start ya Pizza Order</p>
          </Route>
        </Switch>
    </div>
  );
};
export default App;
