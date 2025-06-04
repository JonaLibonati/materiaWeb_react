
import { createContext, useContext, useState, useRef, useEffect } from "react";
import { projectsData } from '../data/projects';
import { useOnRisize } from '../hooks/useOnRisize';


export const ProjectContext = createContext(null);

export const ProjectProvider = ({ children }) => {

  const filters = useRef([]);

  const projects = useRef([]);

  const [ columns, setColumns ] = useState([]);

  const displayProjects = (projects, filters) => {

      let large = window.matchMedia("(min-width: 1300px)");
      let medium = window.matchMedia("(min-width: 950px)");
      let small = window.matchMedia("(max-width: 949px)");

      console.log(filters)

      if (large.matches) {
          let auxArray = [[],[],[]];

          if (filters.length == 0) {
              for (let i = 0; i < projects.length - 2; i+=3) {
                  auxArray = [
                      [...auxArray[0], projects[i]],
                      [...auxArray[1], projects[i+1]],
                      [...auxArray[2], projects[i+2]]
                  ]
              }
          } else {
              for (let i = 0; i < projects.length; i+=3) {
                  auxArray = [
                      [...auxArray[0], projects[i]],
                      [...auxArray[1], projects[i+1]],
                      [...auxArray[2], projects[i+2]]
                  ]
              }
          }

          setColumns (auxArray)

      } else if (medium.matches) {
          let auxArray = [[],[]];

          if (filters.length == 0) {
              for (let i = 0; i < projects.length - 1; i+=2) {
                  auxArray = [
                      [...auxArray[0], projects[i]],
                      [...auxArray[1], projects[i+1]]
                  ]
              }
          } else {
              for (let i = 0; i < projects.length; i+=2) {
                  auxArray = [
                      [...auxArray[0], projects[i]],
                      [...auxArray[1], projects[i+1]]
                  ]
              }
          }


          setColumns (auxArray)

      } else if (small.matches) {
          setColumns ([projects]);
      }
  }

  const filterProjects = ( projects, filters ) => {
    const filteredProjects = projects.filter(project => {
        if (project.filters.length > 0) {
            return filters.every((filter) =>
              project.filters.includes(filter)
            );
        } else {
            return false;
        }
    })
    return filteredProjects;
  }

  const orderProjects = (projects) => {
    let aux;
    for (let i = 0; i < projects.length; i++) {
        for (let i = 0; i < projects.length - 1; i++) {
            if (projects[i].order > projects[i+1].order) {
                aux = projects[i];
                projects[i] = projects[i+1];
                projects[i+1] = aux;
            }
        }
    }
    return projects;
  }

  const handleSetFilters = (selectedFilters) => {
    filters.current = selectedFilters

    if (filters.length != 0) {
          projects.current = filterProjects ( projectsData, selectedFilters );
          projects.current = orderProjects(projects.current);
      } else {
          projects.current = orderProjects(projectsData);
      }
      displayProjects(projects.current, selectedFilters);
  }

  useEffect(() => {
      handleSetFilters([])
  }, [])

  useOnRisize ( () => displayProjects(projects.current, filters.current));

  return (
    <ProjectContext.Provider
      value={{
        displayProjects,
        columns,
        handleSetFilters
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};


export const useProject = () => useContext(ProjectContext);