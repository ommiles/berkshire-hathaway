import React from "react";
import { BrowserRouter as Router, Route, Component } from "react-router-dom";

import NavBar from "./components/NavBar";
// import logo from './logo.svg';
import Home from "./components/Home";
import About from "./components/About";
import Holdings from "./components/Holdings";
import Sustainability from "./components/Sustainability";
import CorporateGovernance from "./components/CorporateGovernance";
import Login from "./components/Login";
import News from "./components/News";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/holdings" component={Holdings} />
          <Route path="/sustainability" component={Sustainability} />
          <Route path="/corporate-governance" component={CorporateGovernance} />
          <Route path="/investors" component={Login} />
          <Route path="/news" component={News} />
        </div>
      </Router>
    );
  }
}
