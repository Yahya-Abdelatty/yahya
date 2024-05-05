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
// JavaScript code for adding animated Ethernet cables
// Function to create and append Ethernet cables
function createEthernetCables() {
    const container = document.querySelector('header .container');
    const cable1 = document.createElement('div');
    const cable2 = document.createElement('div');
    
    cable1.classList.add('ethernet-cable');
    cable2.classList.add('ethernet-cable');
    
    cable1.style.left = '20%';
    cable2.style.right = '20%';
    
    container.appendChild(cable1);
    container.appendChild(cable2);
}

// Add Ethernet cables after a delay to synchronize with the header animation
setTimeout(() => {
    createEthernetCables();
}, 1000);
