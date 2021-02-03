import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { GiAstronautHelmet } from 'react-icons/gi'
import { FaBars, FaTimes } from 'react-icons/fa'
import { CgMenuRightAlt, CgClose } from 'react-icons/cg'
import './navbar.css'
import {IconContext } from 'react-icons/lib'

function Navbar() {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    return (
        <>
        <IconContext.Provider value={{ color: '#73141B'}}>
        <div className="navbar">
            <div className="navbar-container container">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    <GiAstronautHelmet className="navbar-icon" />
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    {click? <CgClose /> : <CgMenuRightAlt />}
                </div>
                <ul className={click? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to="/" className="nav-links" onClick={closeMobileMenu} >Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/" className="nav-links" onClick={closeMobileMenu}>Projects</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/" className="nav-links" onClick={closeMobileMenu}>Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
        </IconContext.Provider>
        </>
    )
}

export default Navbar;