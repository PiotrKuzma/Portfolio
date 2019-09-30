import React from 'react'

const ItemBlock = ({title, imageUrl}) => (
   
    <div className="HomePage__directory__item">
        <div className="background-image" 
        style={{
            backgroundImage: `url(${imageUrl})`
        }}/>
                <div className="HomePage__directory__item__container">
                    <h1 className="item__title">{title}</h1>
                </div>
    </div>
    
)

export default ItemBlock