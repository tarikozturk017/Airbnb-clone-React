import React from "react"
import image from "./images/photo-grid.png"

export default function Hero() {
    return (
        <div className="hero">
            <div id="hero-image"><img src={image} alt="" ></img></div>
            <div className="text-container">
                <h1>Online Experiences</h1>
                <p>Join unique interactive activities led by 
                    one-of-a-kind hosts—all without leaving home.</p>
            </div>
        </div>
    )
}