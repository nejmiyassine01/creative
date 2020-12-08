import React from 'react'
import './Guidelines.scss'
import * as Io from 'react-icons/io'
import img3 from '../../static/img-3.jpg'
import img3M from '../../static/img-3-medium.jpg'

function Guidelines() {
    return (
        <div className="guidelines">
        
            <div className="guidelines_image">
                <picture>
                    <source srcSet={`${img3M} 1x`} media="(max-width: 992px)" />
                    <img
                        className="logo__apple"
                        srcSet={`${img3} 2x`}
                        alt="Full Logo" 
                    />
                </picture>
            </div>

            <div className="guidelines_container">
                <div className="container">
                    <h2>Brand naming & guidelines</h2>
                    <div>
                        <Io.IoIosArrowDropleft />
                        <Io.IoIosArrowDropright />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Guidelines
