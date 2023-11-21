
export const displayProjects = (projects, setColumns, filters) => {

    console.log('hola')

    let large = window.matchMedia("(min-width: 1300px)");
    let medium = window.matchMedia("(min-width: 950px)");
    let small = window.matchMedia("(max-width: 949px)");

    console.log (filters)

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

