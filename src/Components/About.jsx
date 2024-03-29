import React from "react";
import aboutImage from '../images/about.png';

const About = () =>{
    return(
        <div id="about">
            <div className="about-image">
                <img src={aboutImage} alt="" />
            </div>
            <div className="about-text">
                <h1>LEARN MORE ABOUT US</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, fuga atque consectetur voluptatum quas quidem labore beatae hic distinctio, corporis omnis eius facilis quia ratione.</p>
                <button>READ MORE</button>
            </div>
        </div>
    )
}

export default About;