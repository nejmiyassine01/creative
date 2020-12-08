import React from 'react'
import './Navbar.scss'
import * as Hi from 'react-icons/hi'

function Navbar() {
    const handleClick = () => {console.log('clicked')}
    
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

            <div className="nav active">
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
