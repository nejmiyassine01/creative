import React from 'react'
import './Guidelines.scss'
import * as Io from 'react-icons/io'
import img3 from '../../static/img-3.jpg'

function Guidelines() {
    return (
        <div className="guidelines">
            <div className="guidelines_container">
                <div className="container">
                    <h2>Brand naming & guidelines</h2>
                    <Io.IoIosArrowDropleft />
                    <Io.IoIosArrowDropright />
                </div>
            </div>

            <div className="guidelines_image">
                <img src={img3} alt="guideline" />
            </div>
        </div>
    )
}

export default Guidelines
