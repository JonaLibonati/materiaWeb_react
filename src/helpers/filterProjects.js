export const filterProjects = ( projects, filters ) => {

    let filteredProjects = [];

    let match = false;

    projects.map( (project) => {
        match = false;

        project.filters.map( (projectFilter) => {
            filters.map( (filter) => {
                if (projectFilter == filter) {match = true};
            })
        })

        if (match) filteredProjects.push(project);
    })

    console.log(filteredProjects)

    return filteredProjects;
}