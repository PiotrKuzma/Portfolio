// host omgvamp-hearthstone-v1.p.rapidapi.com
// key 7b70f19425msh5da0552af661fa9p12597bjsn80ef49f33cf6


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
      <Route path='/deck/:' component={Deck} />

      </Switch>
    </div>

  )
}

export default App