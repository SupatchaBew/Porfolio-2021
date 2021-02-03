import React from 'react'
import './project.css'

function Project() {
    return (
        <>
            <header>
                <h1>Fitness App</h1>
                <p>a case study of an mobile application that helps people</p>
            </header>
            <img src="./images/balazs-ketyi-sScmok4Iq1o-unsplash.jpg" alt=""/>
            <section>
                <header>
                    <h2>Brief</h2>
                </header>
                <article>
                    A smart phone application which will help people improve their fitness. 
                </article>
            </section>
            <section>
                <header>
                    <h2>Challenge</h2>
                </header>
                <article>
                    People want to exercise more, but for who-for 
                    various reasons-don't get around to it. 
                </article>
            </section>
        </>
    )
}

export default Project;