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
                  imageUrl: 'https://repository-images.githubusercontent.com/227220958/bedf5e80-20e9-11ea-9ad2-f7ebba826678',
                  id: 1,
                  websiteUrl: 'https://piotrkuzma.github.io/Weterynaria/',
                  codeUrl: 'https://github.com/PiotrKuzma/Weterynaria',
                  desc: 'Website developed for my family. Implemented responsive web design, gallery, accordion and phone functionality.'
                  
                },
                {
                  title: 'Landing Page',
                  imageUrl: 'https://repository-images.githubusercontent.com/219338446/40cf8780-20ea-11ea-8738-c1933d92a3fe',
                  id: 2,
                  websiteUrl: 'https://piotrkuzma.github.io/Maestroo/index.html',
                  codeUrl: 'https://github.com/PiotrKuzma/Maestroo',
                  desc: 'Focused on more advanced css like perspective, BEM and taking advantage of built-in browser functionalities.'
                  
                },
                {
                  title: 'Recipe App',
                  imageUrl: 'https://repository-images.githubusercontent.com/225430969/6d839f00-20ea-11ea-9978-fe054b1b78ee',
                  id: 3,
                  websiteUrl: 'https://crazy-spoons.netlify.com/',
                  codeUrl: 'https://github.com/PiotrKuzma/Recipes',
                  desc: 'React app that allows to search for recipe 5x per minute due to API free plan. Hook-based state.'
                  
                },
                {
                  title: 'Shopping Cart',
                  imageUrl: 'https://repository-images.githubusercontent.com/223277486/81c79c00-20ea-11ea-89e7-56f02dabe902',
                  
                  id: 4,
                  websiteUrl: 'https://piotrkuzma.github.io/Shop/',
                  codeUrl: 'https://github.com/PiotrKuzma/Shop',
                  desc: 'This project is still in build process.'
                  
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
                            <h2 className="Projects__board__item__title">{title}</h2>
                            <div className="Projects__board__item__img-container">
                                <img src={imageUrl} className="Projects__board__item__img-container__img"/>
                            </div>
                            <p className="Projects__board__item__desc">{desc}</p>
                            <div className="Projects__board__item__links">
                            <a href={websiteUrl} className="Projects__board__item__links__website" rel="noopener" target="_blank">
                                <Display className="Projects__board__item__links__website__icon"/>
                            </a>

                            <a href={codeUrl} className="Projects__board__item__links__code" rel="noopener" target="_blank">
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