import React from "react"
import logo from "./images/airbnb-logo.png"

export default function Navbar() {
    return (
        <nav className="navbar">
            <img id="airbnb-logo" src={logo} alt=""></img>
        </nav>
    )
}