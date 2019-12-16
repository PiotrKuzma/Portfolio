import React from 'react'
import "./Projects.style.scss"
import { Component } from 'react'
import {ReactComponent as Code } from './icons/code.svg'
import {ReactComponent as Display } from './icons/display.svg'




class Projects extends Component {

    constructor() {
        super()
        this.state = {

            portfolio: [
                {
                  title: 'Vet Clinic',
                  imageUrl: 'https://repository-images.githubusercontent.com/227220958/06ff7200-2053-11ea-8f41-1637a535d6ae',
                  id: 1,
                  websiteUrl: 'https://piotrkuzma.github.io/Weterynaria/',
                  codeUrl: 'https://github.com/PiotrKuzma/Weterynaria',
                  
                },
                {
                  title: 'Landing Page',
                  imageUrl: 'https://repository-images.githubusercontent.com/219338446/44c46980-1ce6-11ea-9859-c68d39849bee',
                  id: 2,
                  websiteUrl: 'https://piotrkuzma.github.io/Maestroo/index.html',
                  codeUrl: 'https://github.com/PiotrKuzma/Maestroo',
                  
                },
                {
                  title: 'Recipe App',
                  imageUrl: 'https://repository-images.githubusercontent.com/225430969/a33f1700-1ce9-11ea-92a6-be383f23edb1',
                  id: 3,
                  websiteUrl: 'https://crazy-spoons.herokuapp.com/',
                  codeUrl: 'https://github.com/PiotrKuzma/Recipes',
                  
                },
                {
                  title: 'Shopping Cart',
                  imageUrl: 'https://repository-images.githubusercontent.com/223277486/92790300-2053-11ea-8a15-849a8659ff72',
                  
                  id: 4,
                  websiteUrl: 'https://piotrkuzma.github.io/Shop/',
                  codeUrl: 'https://github.com/PiotrKuzma/Shop',
                  
                }
               
              ]
        }
    }


    render() {

        return(
   
    <div className="Projects">
        <h2 className="Projects__title">My projects</h2>

        <section className="Projects__board">
                {
                    this.state.portfolio.map(({id, imageUrl, title, desc, websiteUrl, codeUrl}) => (
                        <div key={id} className="Projects__board__item">
                            <div className="Projects__board__item__img-container">
                                <img src={imageUrl} className="Projects__board__item__img-container__img"/>
                            </div>
                            <h2 className="Projects__board__item__title">{title}</h2>
                            <div className="Projects__board__item__links">
                            <a href={websiteUrl} className="Projects__board__item__links__website">
                                <Display className="Projects__board__item__links__website__icon"/>
                            </a>

                            <a href={codeUrl} className="Projects__board__item__links__code">
                                <Code className="Projects__board__item__links__code__icon"/>
                            </a>
                            </div>



                        </div>
                    ))
                }


        </section>
        
    </div>
    ) }
}

export default Projects