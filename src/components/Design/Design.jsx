import React from 'react'
import './Design.scss'
import img2 from '../../static/img-2.jpg'
import img2M from '../../static/img-2-medium.jpg'

function Design() {
    return (
        <div className="design">
            <div className="design_image">
                <picture>
                    <source srcSet={`${img2M} 1x`} media="(max-width: 992px)" />
                    <img
                        className="logo__apple"
                        srcSet={`${img2} 2x`}
                        alt="Full Logo" 
                    />
                </picture>
            </div>
            <div className="design_container">
                <div className="design_content container">
                    <h2>
                        <span>Design</span> is strategic.
                    </h2>
                    <p>
                    &quot;Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print.&quot;
                    </p>
                    <button>
                        Schedule a Call
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Design
