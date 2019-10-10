<<<<<<< HEAD
=======
// host omgvamp-hearthstone-v1.p.rapidapi.com
// key 7b70f19425msh5da0552af661fa9p12597bjsn80ef49f33cf6

>>>>>>> 03a3bac4e7e912173265395374f671c3eed5b69c

import React from 'react';
import { Switch, Route } from 'react-router-dom'

<<<<<<< HEAD
=======



>>>>>>> 03a3bac4e7e912173265395374f671c3eed5b69c
import './App.css';
import Home from "./components/Pages/Home"
import Deck from './components/Pages/Deck'

function App () {
  return(
    <div>
      <Switch>
      <Route exact path='/' component={Home} />
<<<<<<< HEAD
      <Route exact path='/Totem' component={Deck} />
      <Route exact path='/Pirate' component={Deck} />
      <Route exact path='/Murloc' component={Deck} />
      <Route exact path='/Mech' component={Deck} />
      <Route exact path='/Elemental' component={Deck} />
      <Route exact path='/Demon' component={Deck} />
      <Route exact path='/Dragon' component={Deck} />
      <Route exact path='/Beast' component={Deck} />
=======
      <Route path='/deck/:' component={Deck} />
>>>>>>> 03a3bac4e7e912173265395374f671c3eed5b69c

      </Switch>
    </div>

  )
}

export default App