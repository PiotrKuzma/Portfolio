import React from 'react'
import "./Skills.style.scss"
import {ReactComponent as Html } from './icons/html5.svg'
import {ReactComponent as Git } from './icons/git.svg'
import {ReactComponent as Js } from './icons/js.svg'
import {ReactComponent as Node } from './icons/node.svg'
import {ReactComponent as ReactIcon } from './icons/react.svg'
import {ReactComponent as Sass } from './icons/sass.svg'
import {ReactComponent as Team } from './icons/team.svg'
import {ReactComponent as Chart } from './icons/chart.svg'
import {ReactComponent as Code } from './icons/code.svg'



const Skills = () => (
    <div className="SkillsPage">
        <h2 className="SkillsPage__title">Tech skills</h2>
        <section className="section__skills">
            <div className="section__skills__detail">
                <Html className="section__skills__detail__icon"/>
                <h3 className="section__skills__detail__name">HTML 5</h3>
                <p className="section__skills__detail__desc">
                    semantic tags, attributes, basic events
                </p>
            </div>
            <div className="section__skills__detail">
                <Git className="section__skills__detail__icon"/>
                <h3 className="section__skills__detail__name">Git</h3>
                <p className="section__skills__detail__desc">
                    fetching, commiting, handling conflicts,
                    pushing to remotes
                </p>
            </div>
            <div className="section__skills__detail">
                <Js className="section__skills__detail__icon"/>
                <h3 className="section__skills__detail__name">Javascript</h3>
                <p className="section__skills__detail__desc">
                    classes, prototypes, objects, async functions
                </p>
            </div>
            <div className="section__skills__detail">
                <Node className="section__skills__detail__icon"/>
                <h3 className="section__skills__detail__name">Node JS</h3>
                <p className="section__skills__detail__desc">
                    installing packages, creating basic environment
                </p>
            </div>
            <div className="section__skills__detail">
                <ReactIcon className="section__skills__detail__icon"/>
                <h3 className="section__skills__detail__name">React</h3>
                <p className="section__skills__detail__desc">
                    routing, state with basic Hooks, component-driven attitude
                </p>
            </div>
            <div className="section__skills__detail">
                <Sass className="section__skills__detail__icon"/>
                <h3 className="section__skills__detail__name">Scss</h3>
                <p className="section__skills__detail__desc">
                    variables, BEM structure, node-sass or compilation with cmd line
                </p>
            </div>
            


             
        </section>
        <h2 className="SkillsPage__title">What I can do with them</h2>
            <section className="section__example">
                <div className="section__example__container">
                    <Team className="section__example__container__icon"/>
                    <p className="section__example__container__text">
                        I worked with UI developer and created simple, elegant and responsive layouts -
                        using flexbox, media queries, Bootstrap 4 and explicit positioning.
                        I fixed many bugs as requested and delivered simple components to merge them into complete website.

                    </p>
                </div>
                <div className="section__example__container">
                    <Code className="section__example__container__icon"/>
                    <p className="section__example__container__text">
                        I can create reusable components of JS code with classes and fetch external data.
                        I am familiar with devtools when searching for bugs. I was able to design simple architecture when guided
                        and fixed bugs with documentation.
                        

                    </p>
                </div>
                <div className="section__example__container">
                    <Chart className="section__example__container__icon"/>
                    <p className="section__example__container__text">
                        I can work in Agile, speak with clients and teammates in english,
                        polish and czech. I enjoy problem solving and have good skills in workload management.
                        In my work i used ticket managers, sharepoint and implemented many 
                        quality and time-saving improvements for the company.

                    </p>
                </div>

            </section>

          
        
    </div>
)

export default Skills