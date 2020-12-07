import React from 'react'
import img1 from '../../static/img-1.jpg'
import './LandingPage.scss'

function LandingPage() {
    return (
        <div className="landingPage">
            <div className="landingPage_image">
                <img src={img1} alt="landing" />
            </div>

            <div className="container landingPage_overlay">
                <div className="landingPage_container">
                    <h2>
                        Branding & 
                        website design 
                        agency
                    </h2>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </p>
                    <button>
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    )
}

export default LandingPage
