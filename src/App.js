import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/header/header.component";
import Home from "./components/home/home.component";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./components/checkout/checkout.component";
import Login from "./components/login/login.component";
import { auth } from "./firebase/firebase";
import { useStateValue } from "./provider/state-provider";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the App component loads if the second argument array is empty.
    // Otherwise it runs every time there is any change in the argument value change.
    auth.onAuthStateChanged((authUser) => {
      console.log("The user is >>> ", authUser);
      if (authUser) {
        // the user just logged in / the user was logged in.
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out.
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    // BEM
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
          <Route exact path="/login">
            {/* No need of header when rendering a login page. */}
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
