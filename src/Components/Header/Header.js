import React from 'react';
import sofa from "../../images/header-sofa-img.png"

function Header() {
    return (
        <div className = "container">
        <div className = "header-content grid text-center">
            <div className = "header-left">
                <h1>Best Design of Furniture Collection</h1>
                <p className = "text">Improve the atmosphere through interior design that is driven by purposes to bring value into your environment</p>
                <a href = "#" className = "btn-header text-white bg-brown">shop now</a>
            </div>

            <div className = "header-right">
                <img src = {sofa} />
            </div>
            <img src = "images/header-shape.png" className = "header-shape" />
        </div>
    </div>
        )
}

export default Header;
