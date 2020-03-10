import React from 'react'
import { Link } from 'react-router-dom'
import "./SideDrawer.style.scss"
import {ReactComponent as Thinking } from './icons/thinking.svg'

const sideDrawer = ({close}) => (
    <nav className="sideNav">
        
        <ul className="sideNav__list">
        <Thinking className="sideNav__list__picture"/>
        <li><Link to='/' className="sideNav__list__item" onClick={close}>Home</Link></li>
        <li><Link to='/Skills' className="sideNav__list__item" onClick={close}>Skills</Link></li>
        <li><Link to='/Projects' className="sideNav__list__item" onClick={close}>Projects</Link></li>
        </ul>
    </nav>

)

export default sideDrawer