import React, { useRef, useEffect } from 'react';
import { useState } from 'react';
import { ProjectNav } from '../ProjectNav/ProjectNav';
import { ProjectColumn } from '../ProjectColumn/ProjectColumn';
import { projectsData } from '../../../data/projects';
import { useOnRisize } from '../../../hooks/useOnRisize';
import { displayProjects } from '../../../helpers/displayedProjects';
import { orderProjects } from '../../../helpers/orderProjects';
import { filterProjects } from '../../../helpers/filterProjects';
import './projectSection.style.css';

export const ProjectSection = () => {

    const [ filters, setFilters ] = useState([]);

    const projects = useRef([]);

    const [ columns, setColumns ] = useState([]);

    const pj = useRef(null);

    const handleResize = () => {
        displayProjects(projects.current, setColumns, filters)
    }

    useOnRisize ( () => handleResize());

    useEffect(() => {

        if (filters.length != 0) {
            projects.current = filterProjects ( projectsData, filters );
            projects.current = orderProjects(projects.current);
        } else {
            projects.current = orderProjects(projectsData);
        }

        displayProjects(projects.current, setColumns, filters);

        console.log(columns)

    }, [filters])

    return (
        <>
            <div>
                <ProjectNav setFilters={setFilters} />
                <section className="pj unselectable" id='pj' ref={pj}>
                    {columns.map( (column, index) =>  <ProjectColumn key={index} column = {column} />)}
                </section>
            </div>
        </>
    )
}
