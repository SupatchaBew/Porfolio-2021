import React from 'react'
import { Link } from 'react-router-dom'
import './hero.css'


function HeroSection({
    lightBg, topLine, lightText, lightTextDesc, headline, description, buttonLable, img, alt, imgStart}) {
    return (
        <>
        <div className={lightBg? 'home__hero-section' : 'home__hero-section darkBg'}>
            <div className="container">
                <div className="row home__hero-row"
                style={{display: 'flex', flexDirection: imgStart === 'start'? 'row-reverse' : 'row'}}>
                    <div className='col'>
                        <div className="top-line">{topLine}</div>
                        <h1 className={lightText? 'heading' : 'header dark'}>{headline}</h1>
                        <p className={lightTextDesc? 'home_hero-subtitle' : 'home_hero-subtitle dark'}>{description}</p>
                        <Link to="/sign-up">
                            {buttonLable}
                        </Link> 
                    </div>
                    <div className='col'>
                        <div className="home__hero-img-wrapper">
                            <img src={img} alt={alt} className="home__hero-img" /> 
                        </div>    
                    </div>
                </div>
            </div>
        </div>    
        </>
    )
}

export default HeroSection;