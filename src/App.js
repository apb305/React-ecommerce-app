import React from "react";
import { Provider } from "react-redux";
import store from "../src/redux/store";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./components/Main";
import About from "./components/About";
import Cart from "./components/Cart";
//import Contact from "./components/Contact";
import Checkout from "./components/Checkout";
import Error from "./components/Error";

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <Navbar />
          <Route path="/navbar" component={Navbar} />
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/Cart" component={Cart} />
            <Route path="/Checkout" component={Checkout} />
            <Route path="/About" component={About} />
            {/* <Route path="/Contact" component={Contact} /> */}
            <Route component={Error} />
          </Switch>
        </Provider>
      </BrowserRouter>
    );
  }
}
