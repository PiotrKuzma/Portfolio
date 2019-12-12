import React from 'react'
import './Backdrop.style.scss'

const Backdrop = ({close}) => (

    <div className="backdrop" onClick={close}/>
)

export default Backdrop