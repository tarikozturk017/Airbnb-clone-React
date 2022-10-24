import React from "react"
import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import Card from "./Components/Card"
import data from "./data"

/*
Challenge: Build the Navbar component.
Check the Figma file for the design specifics.
*/

export default function App() {
    const cards = data.map(item => {
        return (
            <Card 
                key={item.id}
                {...item}
            />
        )
    } );

    return (
        <div>
            <Navbar />
            <Hero />
            <div className="cards-container">
                <section className="cards-list">
                    {cards}
                </section>
            </div>
        </div>
    )
}