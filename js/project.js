const projects = [
    {
        projectName: "The VALLY phase 2&3",
        consultant: "Parsons",
        mainContractor: "ZAID ALHUSSAN",
        client: "EMAAR",
        status: "pending"
    },
    {
        projectName: "Dubai south development phase 1",
        consultant: "Parsons",
        mainContractor: "Oriant Irrigation Services",
        client: "EMAAR",
        status: "pending"
    },
    {
        projectName: "MAJAN Phase 1",
        client: "DHRE",
        consultant: "Parsons",
        mainContractor: "ZAID ALHUSAN",
        status: "achievement"
    },
    {
        projectName: "MAJAN Phase 2.1 &2.2 2.3",
        client: "DHRE",
        consultant: "Parsons",
        mainContractor: "ZAID ALHUSAN",
        status: "achievement"
    },
    {
        projectName: "DUBAI HILLS ESTAT Phase 3",
        client: "EMAAR",
        consultant: "KEO International",
        mainContractor: "Ghantoot Landscaping",
        status: "pending"
    }
];


const projectContainer = document.getElementById("project-container")
const options = Array.from(document.querySelectorAll("#project .options .option"))

function displayProject(data) {
    let projectContent = '';
    data.forEach(element => {
        projectContent += `
        <div class="col-lg-4 col-md-6 col-12 p-2" data-aos="fade-up" data-aos-duration="500">
            <div class="project w-100 bg-white rounded rounded-2 overflow-hidden shadow">
                <div class="project-header p-2">
                    <h4 class="text-center text-white fw-bolder h5 m-0 p-2">${element.projectName}</h3>
                </div>
                <div class="project-info p-2">
                    <div class="px-2 py-1 mb-1">
                        <p class="label m-0"><i class="fa-regular fa-circle-check"></i>Client</p>
                        <p class="value m-0">${element.client}</p>
                    </div>
                    <div class="px-2 py-1 mb-1">
                        <p class="label m-0"><i class="fa-regular fa-circle-check"></i>Consultant</p>
                        <p class="value m-0">${element.consultant}</p>
                    </div>
                    <div class="px-2 py-1 mb-1">
                        <p class="label m-0"><i class="fa-regular fa-circle-check"></i>Main Contractor</p>
                        <p class="value m-0">${element.mainContractor}</p>
                    </div>
                </div>
            </div>
        </div>
        `
    })
    projectContainer.innerHTML += projectContent;
}

displayProject(projects);

options.forEach(option => {
    option.addEventListener("click", () => {
        options.forEach(option => option.classList.remove("active"))
        option.classList.add("active")
        projectContainer.innerHTML = "";
        const type = option.getAttribute("data-type");
        const projectsInSameType = projects.filter(project => project.status === type);
        projectsInSameType.length === 0 ? displayProject(projects) : displayProject(projectsInSameType);
    });
});