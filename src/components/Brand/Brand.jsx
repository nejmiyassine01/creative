import React from 'react'
import BrandData from './BrandData'
import './Brand.scss'

function Brand() {
    return (
        <div className="brand">
            <div className="container brand_container">
                <div className="brand_left">
                    <h2>
                        Our approch for creating a winning brand
                    </h2>
                </div>
                <div className="brand_right">
                {BrandData.map((brand, index) => (
                    <div key={index}>
                        <h3>{brand.title}</h3>
                        <p>{brand.text}</p>
                    </div>
                ))}
                </div>
            </div>
        </div>
    )
}

export default Brand
