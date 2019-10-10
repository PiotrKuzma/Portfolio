import React, { Component } from 'react';
import {Header} from './components/Header.comp'

// host omgvamp-hearthstone-v1.p.rapidapi.com
// key 7b70f19425msh5da0552af661fa9p12597bjsn80ef49f33cf6





class Beasts extends Component { 
  constructor () {
   super()
   this.state = {
     monsters: []
   }
  }

  componentDidMount() {
  fetch("https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/races/Beast", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
		"x-rapidapi-key": "7b70f19425msh5da0552af661fa9p12597bjsn80ef49f33cf6"
	}
})
.then(response => response.json())
  .then(dragons => this.setState({ monsters: dragons}))



  }
  
  render () {
    return (
    <div className="Container"> 
      <Header/>
      <div className="Deck">
          
        {this.state.monsters.map(monster => (
          
          <img className="Deck__cardImage" key="{monster.cardId}" src={monster.img} alt=""/>
          
        ))}
      </div>
    </div>
    

    );

  }
 

}
export default Beasts;