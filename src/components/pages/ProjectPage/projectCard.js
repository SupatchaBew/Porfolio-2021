import React from 'react'
import { Link } from 'react-router-dom'
import './projectCard.css'

function ProjectCard({imgSrc, imgAlt, title, category, pageSrc }) {
    return (
        <div className="project-container">
            <img src={imgSrc} alt={imgAlt} />
            <div className="project-info">
                <h4>{title}</h4>
                <hr />
                <p>{category}</p>
                <Link to={"/" + pageSrc}>read more</Link>
            </div>  
        </div>
    )
}

export default ProjectCard;