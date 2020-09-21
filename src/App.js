import React from "react";
import "./App.css";
import Header from "./components/header/header.component";
import Home from "./components/home/home.component";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./components/checkout/checkout.component";

function App() {
  return (
    // BEM
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
