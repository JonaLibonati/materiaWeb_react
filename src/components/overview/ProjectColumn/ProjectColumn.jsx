import React from 'react';
import { ProjectCard } from '../ProjectCard/ProjectCard';
import './projectColumn.style.css';

export const ProjectColumn = ({ column }) => {

    return (
        <>
            <div className="pj__flexContainer">
                {column.map( (project) => project? <ProjectCard key = {project.order} {...project} /> : <></>)}
            </div>
        </>
    )
}

