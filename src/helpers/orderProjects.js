
export const orderProjects = (projects) => {

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

