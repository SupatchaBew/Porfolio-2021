import React from 'react'
import HeroSection from '../hero'
import { homeObjOne } from './data'
import WorkSection from '../work'

function Home() {
    return (
        <>
            <HeroSection {...homeObjOne} />
            <WorkSection />
        </>
    )
}

export default Home;