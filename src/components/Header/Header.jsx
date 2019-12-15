import React from 'react';
import { Link } from 'react-router-dom'
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
                    <Link to='/' className="header__nav__links-container__list__item">Home</Link>
                    <Link to='/Skills' className="header__nav__links-container__list__item shape">Skills</Link>
                    <Link to='/Projects' className="header__nav__links-container__list__item">Projects</Link>
                    <Link to='/Contact' className="header__nav__links-container__list__item">Contact</Link>
                </ul>
            </div>
        </nav>
    </header>

)

export default Header;