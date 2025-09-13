import React from 'react'
import '../styles/Hero.css'
const Hero = () => {
    return (
        <section className="hero">
            <div className="slide1">
                <div className="left-slide1">
                    <h3>Khushiyon Ki Kit</h3>
                    <h1>Spices That Add Flavour To Happiness</h1>
                    <p>Premium quality spices, hygienically packed to bring joy and authenticity</p>
                </div>
                <div className="right-slide1">
                    <img src="/assets/images/Frame 5 (1).png" alt="packets" />
                </div>
            </div>
        </section>
    )
}

export default Hero
