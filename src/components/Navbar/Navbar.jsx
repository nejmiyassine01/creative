import React, { useState } from 'react'
import './Navbar.scss'
import * as Hi from 'react-icons/hi'

function Navbar() {
    const [menu, setMenu] = useState(false);
    const handleClick = () => setMenu(!menu);
    
    return (
        <>
            <div className="navbar">
                <div className="navbar_container container">
                    <div className="navbar_logo">
                        <h3>Creative</h3>
                    </div>

                    <div className="navbar_menu" onClick={handleClick}>
                        <Hi.HiMenuAlt3 />
                    </div>

                    <ul>
                        <li>
                            <a href="#about">About</a>
                            <a href="#services">Services</a>
                            <a href="#projects">Projects</a>
                            <button type="submit">Schedule a Call</button>
                        </li> 
                    </ul>
                </div>
            </div>

            <div className={menu ? 'nav nav_hide' : 'nav nav_show'}>
                <ul>
                    <li>
                        <a href="#about">About</a>
                        <a href="#services">Services</a>
                        <a href="#projects">Projects</a>
                        <button type="submit">Schedule a Call</button>
                    </li> 
                </ul>
            </div>
        </>
    )
}

export default Navbar
