import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";

import "./App.scss";
import Home from "./components/Pages/Home/Home";
import Skills from "./components/Pages/Skills/Skills";
import Projects from "./components/Pages/Projects/Projects";

import SideDrawer from "./components/SideDrawer/SideDrawer";

class App extends Component {
  state = {
    sideNav: false
  };

  toggleClickHandler = () => {
    this.setState(prevState => {
      return {
        sideNav: !prevState.sideNav
      };
    });
  };

  navClose = () => {
    this.setState({ sideNav: false });
  };

  render() {
    let sideNav;

    if (this.state.sideNav) {
      sideNav = <SideDrawer close={this.navClose} />;
    }
    return (
      <div className="wrapper">
        <Header burgerFunctionality={this.toggleClickHandler} />
        {sideNav}

        <main className="main-container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Skills" component={Skills} />
            <Route exact path="/Projects" component={Projects} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
