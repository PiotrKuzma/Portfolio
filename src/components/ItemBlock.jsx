import React from 'react'

import { Link } from 'react-router-dom'

const ItemBlock = ({title, imageUrl, route }) => (
    
    <Link to="/" className="HomePage__directory__item">
   
        <div className="background-image" 
        style={{
            backgroundImage: `url(${imageUrl})`
        }}/>
        <div className="HomePage__directory__item__container">
            <h1 className="item__title">{title}</h1>
        </div>
    
    </Link>
    
    
)


export default ItemBlock