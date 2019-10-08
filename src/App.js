
import React from 'react';
import { Switch, Route } from 'react-router-dom'

import './App.css';
import Home from "./components/Pages/Home"
import Deck from './components/Pages/Deck'

function App () {
  return(
    <div>
      <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/Totem' component={Deck} />
      <Route exact path='/Pirate' component={Deck} />
      <Route exact path='/Murloc' component={Deck} />
      <Route exact path='/Mech' component={Deck} />
      <Route exact path='/Elemental' component={Deck} />
      <Route exact path='/Demon' component={Deck} />
      <Route exact path='/Dragon' component={Deck} />
      <Route exact path='/Beast' component={Deck} />

      </Switch>
    </div>

  )
}

export default App