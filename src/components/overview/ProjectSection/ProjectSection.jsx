import React, { useRef, useEffect } from 'react';
import { useState } from 'react';
import { ProjectNav } from '../ProjectNav/ProjectNav';
import { ProjectColumn } from '../ProjectColumn/ProjectColumn';
import { useProject } from '../../../contexts/ProjectContext';
import './projectSection.style.css';

export const ProjectSection = () => {

    const { displayProjects, columns } = useProject();

    const pj = useRef(null);

    return (
        <>
            <div>
                <ProjectNav />
                <section className="pj unselectable" id='pj' ref={pj}>
                    {columns.map( (column, index) =>  <ProjectColumn key={index} column = {column} />)}
                </section>
            </div>
        </>
    )
}
