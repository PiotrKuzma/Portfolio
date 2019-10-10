import React, { Component } from 'react';
<<<<<<< HEAD
import {Arrow} from '../Arrow.comp'
import { withRouter } from 'react-router-dom'
=======
import {Header} from '../Header.comp'
import Directory from '../Directory/Directory'


// host omgvamp-hearthstone-v1.p.rapidapi.com
// key 7b70f19425msh5da0552af661fa9p12597bjsn80ef49f33cf6




>>>>>>> 03a3bac4e7e912173265395374f671c3eed5b69c

class Deck extends Component { 
  constructor (props) {
   super(props)
   this.state = {
     cards: [],
     
<<<<<<< HEAD
     
=======
>>>>>>> 03a3bac4e7e912173265395374f671c3eed5b69c
   }
  }
  
  
  componentDidMount() {
<<<<<<< HEAD
  
  let query = this.props.match.path
  
    
    
  fetch(`https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/races${query}`, {
=======
    let { handle } = this.props.match.params
  fetch(`https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/races/${handle}`, {
>>>>>>> 03a3bac4e7e912173265395374f671c3eed5b69c
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
<<<<<<< HEAD
      <Arrow/>
=======
      <Header/>
>>>>>>> 03a3bac4e7e912173265395374f671c3eed5b69c
      <div className="Deck">
          
        {this.state.cards.map(card => (
          
          <img className="Deck__cardImage" key="{card.cardId}" src={card.img} alt=""/>
          
        ))}
      </div>
    </div>
    

    );

  }
 

}
<<<<<<< HEAD
export default withRouter(Deck) 
=======
export default Deck;
>>>>>>> 03a3bac4e7e912173265395374f671c3eed5b69c
