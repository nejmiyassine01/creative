import React from 'react'
import './Navbar.scss'
import * as Hi from 'react-icons/hi'

function Navbar() {
    return (
        <>
            <nav className="navbar">
                <div className="container navbar_container">
                    <div className="navbar_logo">
                        <h3>Creative</h3>
                    </div>
                    <div className="navbar_menu">
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
            </nav>
            <div className="active">
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
