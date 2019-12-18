import React from 'react'
import { Link } from 'react-router-dom'
import "./SideDrawer.style.scss"

const sideDrawer = ({close}) => (
    <nav className="sideNav">
        
        <ul className="sideNav__list">
        <li><Link to='/' className="sideNav__list__item" onClick={close}>Home</Link></li>
        <li><Link to='/Skills' className="sideNav__list__item" onClick={close}>Skills</Link></li>
        <li><Link to='/Projects' className="sideNav__list__item" onClick={close}>Projects</Link></li>
        </ul>
    </nav>

)

export default sideDrawer