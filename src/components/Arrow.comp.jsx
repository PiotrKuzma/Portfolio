import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../SVG/undo2.svg'

export const Arrow = () => {
    
    return(
        <Link to="/">
        <div className="Arrow">
        <Logo className="Arrow__back"/>
        </div>
        </Link>)

}