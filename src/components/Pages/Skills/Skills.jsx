import React from 'react'
import "./Skills.style.scss"
import {ReactComponent as Html } from './icons/html5.svg'
import {ReactComponent as Git } from './icons/git.svg'
import {ReactComponent as Js } from './icons/js.svg'
import {ReactComponent as Redux } from './icons/redux.svg'
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
                <div className="section__skills__detail__container">
                    <Html className="section__skills__detail__container__icon"/>
                    <h3 className="section__skills__detail__container__name">HTML 5</h3>
                </div>
                <p className="section__skills__detail__desc">
                    Semantic tags, tables, attributes and events.
                </p>
            </div>
            <div className="section__skills__detail">
                <div className="section__skills__detail__container">
                    <Git className="section__skills__detail__container__icon"/>
                    <h3 className="section__skills__detail__container__name">Git</h3>
                </div>
                <p className="section__skills__detail__desc">
                    Fetching branches, committing, handling conflicts,
                    pushing to remotes.
                </p>
            </div>
            <div className="section__skills__detail">
                <div className="section__skills__detail__container">
                    <Js className="section__skills__detail__container__icon"/>
                    <h3 className="section__skills__detail__container__name">Javascript</h3>
                </div>
                <p className="section__skills__detail__desc">
                    Good understanding of scope, higher order functions, DOM manipulation.
                </p>
            </div>
            <div className="section__skills__detail">
                <div className="section__skills__detail__container">
                    <Redux className="section__skills__detail__container__icon"/>
                    <h3 className="section__skills__detail__container__name">Redux</h3>
                </div>
                <p className="section__skills__detail__desc">
                    Creating selectors with reselect, coding actions, mapping state to props, dispatching actions.
                    You can find a lot of redux code in my e-commerce project.
                </p>
            </div>
            <div className="section__skills__detail">
                <div className="section__skills__detail__container">
                    <ReactIcon className="section__skills__detail__container__icon"/>
                    <h3 className="section__skills__detail__container__name">React</h3>
                </div>
                <p className="section__skills__detail__desc">
                    Routing and with-router, basic Hooks, component-driven attitude.
                    I'm mesmerized by all solutions that Gatsby and Next are provided with and it's currently my goal to learn these technologies. &#129505;
                </p>
            </div>
            <div className="section__skills__detail">
                <div className="section__skills__detail__container">
                    <Sass className="section__skills__detail__container__icon"/>
                    <h3 className="section__skills__detail__container__name">Scss</h3>
                </div>
                <p className="section__skills__detail__desc">
                    Variables, BEM structure, node-sass, or compilation with cmd line.
                </p>
            </div>
        </section>
        <h2 className="SkillsPage__title">How can I help?</h2>
        <section className="section__example">
            <div className="section__example__container">
                <Team className="section__example__container__icon"/>
                <p className="section__example__container__text">
                    I worked with UI developer and created simple, elegant and responsive layouts -
                    using flexbox, grid, media queries, Bootstrap 4 and explicit positioning.
                    I'm familiar with Figma designs and discussing issues.
                </p>
            </div>
            <div className="section__example__container">
                <Code className="section__example__container__icon"/>
                <p className="section__example__container__text">
                    I can create reusable components with classes and fetch external data to display.<br/>
                    I'm familiar with devtools, when searching for bugs.<br/>
                    I'm able to design simple dataflow architecture when guided.<br/>
                    I fixed bugs with documentation.
                </p>
            </div>
            <div className="section__example__container">
                <Chart className="section__example__container__icon"/>
                <p className="section__example__container__text">
                    I have proven experience in Agile workload management, and possess good language skills. I truly enjoy problem solving and "aha" moments.
                    I'm also used to delivering improvements on a regular basis. Feel free to learn about my transferable experience
                    on LinkedIn.
                </p>
            </div>
        </section>
    </div>
)

export default Skills