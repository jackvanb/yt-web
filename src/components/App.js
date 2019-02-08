import React, { Component } from "react";
import NavBar from "./NavBar/NavBar.js";

import HomePage from "./HomePage.js";
import Second from "./Second.js";
import QuizPage from "./QuizPage.js";
import Login from "./Login.js";
import Signup from "./Signup.js";
import { Switch, Route } from "react-router-dom";

export default class App extends Component {
  constructor() {
    super();

    this.state = { width: 0 };
    this.setSize = this.setSize.bind(this);
  }

  render() {
    return (
      <div>
        <NavBar width={this.state.width} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/contact" component={Second} />
          <Route exact path="/quiz" component={QuizPage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
        </Switch>
      </div>
    );
  }

  setSize() {
    this.setState({ width: window.innerWidth });
  }

  componentDidMount() {
    this.setSize();
    window.addEventListener("resize", this.setSize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.setSize);
  }
}
