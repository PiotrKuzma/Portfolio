import React from 'react'

import { withRouter } from 'react-router-dom'


const ItemBlock = ({title, imageUrl, link, history, match }) => (
    
    <div className="HomePage__directory__item" params={title} onClick={() => history.push(`${match.url}${link}`)}>
   
        <div className="background-image" 
        style={{
            backgroundImage: `url(${imageUrl})`
        }}/>
        <div className="HomePage__directory__item__container">
            <h1 className="item__title">{title}</h1>
        </div>
    
    </div>
    
    
)


export default withRouter(ItemBlock)