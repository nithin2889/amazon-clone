import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/header/header.component";
import Home from "./components/home/home.component";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./components/checkout/checkout.component";
import Login from "./components/login/login.component";
import { auth } from "./firebase/firebase";
import { useStateValue } from "./provider/state-provider";
import Payment from "./components/payment/payment.component";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./components/orders/orders.component";

const promise = loadStripe(
  "pk_test_51HI7xqG8udYDD9WQSdonTBpn0AN1C4qG5QhOkzL2LNZzH6WYIhGsPGMnqiZyTPsuYZ3qFnBAxBreaUmLcfyh2Ih200JbRUyTVb"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("The user is >>> ", authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
