import React from 'react';
import { NavLink } from 'react-router-dom'
import './Header.style.scss'
import DrawerToggle from '../SideDrawer/DrawerToggle'

const Header = ({burgerFunctionality}) => (
    <header className="header">
        <nav className="header__nav">
            <div className="header__nav__burger">
                <DrawerToggle click={burgerFunctionality}/>
            </div>
            <div className="header__nav__links-container">
                <ul className="header__nav__links-container__list">
                    <NavLink to='/' className="header__nav__links-container__list__item">About</NavLink>
                    <NavLink to='/Skills' className="header__nav__links-container__list__item">Skills</NavLink>
                    <NavLink to='/Projects' className="header__nav__links-container__list__item">Projects</NavLink>
                </ul>
            </div>
        </nav>
    </header>

)

export default Header;