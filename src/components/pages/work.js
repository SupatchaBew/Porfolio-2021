import React from 'react'
import Project from './ProjectPage/projectCard'
import { projectFitnessApp, projectClouter} from './HomePage/data' 
import { Link } from 'react-router-dom';

function WorkSection() {
    return (
        <div>
            <h2>My Works</h2>
            <Link to="/projects">more projects</Link>
            <Project {...projectFitnessApp} />
            <Project {...projectClouter} />
        </div>
    )
}

export default WorkSection;