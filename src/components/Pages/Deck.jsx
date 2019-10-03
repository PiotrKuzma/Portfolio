import React, { Component } from 'react';
import {Header} from '../Header.comp'
import Directory from '../Directory/Directory'


// host omgvamp-hearthstone-v1.p.rapidapi.com
// key 7b70f19425msh5da0552af661fa9p12597bjsn80ef49f33cf6





class Deck extends Component { 
  constructor (props) {
   super(props)
   this.state = {
     cards: [],
     
   }
  }
  
  
  componentDidMount() {
    let { handle } = this.props.match.params
  fetch(`https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/races/${handle}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
		"x-rapidapi-key": "7b70f19425msh5da0552af661fa9p12597bjsn80ef49f33cf6"
	}
})
.then(response => response.json())
  .then(race => this.setState({ cards: race}))



  }
  
  render () {
    return (
    <div className="Container"> 
      <Header/>
      <div className="Deck">
          
        {this.state.cards.map(card => (
          
          <img className="Deck__cardImage" key="{card.cardId}" src={card.img} alt=""/>
          
        ))}
      </div>
    </div>
    

    );

  }
 

}
export default Deck;