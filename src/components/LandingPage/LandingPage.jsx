import React from 'react'
import img1 from '../../static/img-1.jpg'
import img1M from '../../static/img-1-medium.jpg'
import './LandingPage.scss'

function LandingPage() {
    return (
        <div className="landingPage">
            <div className="landingPage_image">
                <picture>
                    <source srcSet={`${img1M} 1x`} media="(max-width: 992px)" />
                    <img
                        className="logo__apple"
                        srcSet={`${img1} 2x`}
                        alt="Full Logo" 
                    />
                </picture>
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
