// Animation for header
const header = document.querySelector('header');
header.style.opacity = 0;
header.style.transform = 'translateY(-20px)';
header.style.transition = 'opacity 1s, transform 1s';

setTimeout(() => {
    header.style.opacity = 1;
    header.style.transform = 'translateY(0)';
}, 500);

// Simulate loading projects dynamically
const projectsSection = document.getElementById('projects');
const projectsContainer = projectsSection.querySelector('.container');

// Dummy project data (replace with actual data)
const dummyProjects = [
    { name: 'Project 1', description: 'Description of project 1.' },
    { name: 'Project 2', description: 'Description of project 2.' },
    // Add more projects here
];

// Function to create project elements
function createProjectElement(project) {
    const projectElement = document.createElement('div');
    projectElement.classList.add('project');
    projectElement.innerHTML = `
        <h3>${project.name}</h3>
        <p>${project.description}</p>
    `;
    return projectElement;
}

// Function to display projects
function displayProjects() {
    dummyProjects.forEach(project => {
        const projectElement = createProjectElement(project);
        projectsContainer.appendChild(projectElement);
    });
}

// Delay loading projects to simulate asynchronous loading
setTimeout(() => {
    displayProjects();
}, 1500);
