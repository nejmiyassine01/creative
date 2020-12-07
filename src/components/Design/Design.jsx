import React from 'react'
import './Design.scss'
import img2 from '../../static/img-2.jpg'

function Design() {
    return (
        <div className="design">
            <div className="design_image">
                <img src={img2} alt="design" />
            </div>
            <div className="design_container container">
                <div className="design_content">
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
