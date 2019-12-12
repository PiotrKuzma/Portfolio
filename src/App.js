
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Header from './components/Header/Header'

import './App.scss';
import Home from "./components/Pages/Home/Home"
import Skills from "./components/Pages/Skills/Skills"
import Projects from "./components/Pages/Projects/Projects"
import Contact from "./components/Pages/Contact/Contact"
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop'


class App extends Component {
  
  state = {
    sideNav: false
  }
 
 
  toggleClickHandler = () => {
    this.setState((prevState) => {
      return {
        sideNav: !prevState.sideNav
      }
    })

  }

  navClose = () => {
    this.setState({sideNav: false})
  }
  
  render() {

    let sideNav
    let backdrop

    if(this.state.sideNav) {
      sideNav = <SideDrawer close={this.navClose}/>
      backdrop = <Backdrop close={this.navClose}/>
    }
    return (
      <div className="wrapper">
      <Header burgerFunctionality ={this.toggleClickHandler}/>
       {sideNav}
       {backdrop}
      <main className="main-container">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/Skills' component={Skills} />
          <Route exact path='/Projects' component={Projects} />
          <Route exact path='/Contact' component={Contact} />
        </Switch>
      </main>
      
      
    </div>

    )
  }
}

export default App