import React, { useRef, useEffect } from 'react';
import { useProject } from '../../../contexts/ProjectContext';
import './ProjectNav.style.css';

export const ProjectNav = () => {

    const {handleSetFilters} = useProject();

    const pj__nav = useRef(null);

    const pj__navItem1 = useRef(null);
    const pj__navItem2 = useRef(null);
    const pj__navItem3 = useRef(null);
    const pj__navItem4 = useRef(null);
    const pj__navItem5 = useRef(null);
    const pj__navItem6 = useRef(null);

    const pj__navItems = useRef({});

    useEffect(() => {
        pj__navItems.current =
            {
                pj__navItem1: pj__navItem1.current,
                pj__navItem2: pj__navItem2.current,
                pj__navItem3: pj__navItem3.current,
                pj__navItem4: pj__navItem4.current,
                pj__navItem5: pj__navItem5.current,
                pj__navItem6: pj__navItem6.current,
            }
    }, [])

    const handleClick = (filter, pj__navItemClicked, pj__navItems) => {

        const { pj__navItem1, pj__navItem2, pj__navItem3, pj__navItem4, pj__navItem5, pj__navItem6} = pj__navItems;

        console.log('click')

        pj__navItem1.classList.remove('pj__navH3-onClick');
        pj__navItem2.classList.remove('pj__navH3-onClick');
        pj__navItem3.classList.remove('pj__navH3-onClick');
        pj__navItem4.classList.remove('pj__navH3-onClick');
        pj__navItem5.classList.remove('pj__navH3-onClick');
        pj__navItem6.classList.remove('pj__navH3-onClick');

        pj__navItemClicked.classList.toggle('pj__navH3-onClick');

        if (filter == "todo") {
            handleSetFilters ([])
            pj__navItem1.classList.add('pj__navH3-onClick')
            pj__navItem2.classList.remove('pj__navH3-onClick');
            pj__navItem3.classList.remove('pj__navH3-onClick');
            pj__navItem4.classList.remove('pj__navH3-onClick');
            pj__navItem5.classList.remove('pj__navH3-onClick');
            pj__navItem6.classList.remove('pj__navH3-onClick');
        } else {
            handleSetFilters ([filter]);
        }
    }

    return (
        <>
            <div className='pj__nav' ref={pj__nav}>
                <div className='pj__navList'>
                    <h4 className="pj__navItem pj__navH3 pj__navH3-onClick" ref={pj__navItem1} onClick={() => handleClick ('todo', pj__navItem1.current, pj__navItems.current)}><span className='nowrap'>todo /  </span> </h4>
                    <h4 className="pj__navItem pj__navH3" ref={pj__navItem2} onClick={() => handleClick ('urb', pj__navItem2.current, pj__navItems.current)}><span className='nowrap'>urbanizaciones /  </span> </h4>
                    <h4 className="pj__navItem pj__navH3" ref={pj__navItem3} onClick={() => handleClick ('espPub', pj__navItem3.current, pj__navItems.current)}><span className='nowrap'>espacio público /  </span> </h4>
                    <h4 className="pj__navItem pj__navH3" ref={pj__navItem4} onClick={() => handleClick ('inst', pj__navItem4.current, pj__navItems.current)}><span className='nowrap'>institucional /  </span> </h4>
                    <h4 className="pj__navItem pj__navH3" ref={pj__navItem5} onClick={() => handleClick ('cultDep', pj__navItem5.current, pj__navItems.current)}><span className='nowrap'>cultura y deporte /  </span> </h4>
                    <h4 className="pj__navItem pj__navH3" ref={pj__navItem6} onClick={() => handleClick ('vivienda', pj__navItem6.current, pj__navItems.current)}><span className='nowrap'>vivienda /  </span> </h4>
                </div>
            </div>
        </>
    )
}
