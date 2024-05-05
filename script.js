// Function to simulate data animation
function animateData() {
    const projectsSection = document.getElementById('projects');
    const projects = projectsSection.querySelectorAll('.project');

    projects.forEach((project, index) => {
        const delay = index * 500; // Delay animation for each project
        setTimeout(() => {
            project.style.opacity = 1;
            project.style.transform = 'translateY(0)';
        }, delay);
    });
}

// Animate data when the page is loaded
window.addEventListener('load', () => {
    animateData();
});
