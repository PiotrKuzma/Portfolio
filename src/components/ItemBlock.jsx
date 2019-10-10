import React from 'react'

<<<<<<< HEAD
import { withRouter } from 'react-router-dom'


const ItemBlock = ({title, imageUrl, link, history, match }) => (
    
    <div className="HomePage__directory__item" params={title} onClick={() => history.push(`${match.url}${link}`)}>
=======
import { Link } from 'react-router-dom'

const ItemBlock = ({title, imageUrl, route }) => (
    
    <Link to="/" className="HomePage__directory__item">
>>>>>>> 03a3bac4e7e912173265395374f671c3eed5b69c
   
        <div className="background-image" 
        style={{
            backgroundImage: `url(${imageUrl})`
        }}/>
        <div className="HomePage__directory__item__container">
            <h1 className="item__title">{title}</h1>
        </div>
    
<<<<<<< HEAD
    </div>
=======
    </Link>
>>>>>>> 03a3bac4e7e912173265395374f671c3eed5b69c
    
    
)


<<<<<<< HEAD
export default withRouter(ItemBlock)
=======
export default ItemBlock
>>>>>>> 03a3bac4e7e912173265395374f671c3eed5b69c
