// Array of image sources and project links
const projects = [
    {
        src: "portfolio website.jpg",
        link: "#" // Replace with the actual project URL
    },
    {
        src: "about&skills page.jpg",
        link: "#" // Replace with the actual project URL
    },
    {
        src: "project section.jpg",
        link: "#" // Replace with the actual project URL
    },
    {
        src: "photo_2024-10-30_07-47-47.jpg",
        link: "#" // Replace with the actual project URL
    }
];

// Select the container where images will be added
const projectImagesContainer = document.querySelector('.project-images');

// Function to add images dynamically as clickable links
function addImages() {
    projectImagesContainer.innerHTML = projects.map(project => `
        <a href="${project.link}" target="_blank" class="slider-link">
            <img src="${project.src}" alt="portfolio" class="slider">
        </a>
    `).join('');
}

// Initialize the slider position and add images on page load
let currentIndex = 0;

function showSlide() {
    const slides = document.querySelectorAll('.slider-link');
    slides.forEach((slide, index) => {
        slide.style.display = index === currentIndex ? 'block' : 'none'; // Show only the active image
    });
}

// Function to move to the previous slide
function scrollLeft() {
    currentIndex = (currentIndex === 0) ? projects.length - 1 : currentIndex - 1;
    showSlide();
}

// Function to move to the next slide
function scrollRight() {
    currentIndex = (currentIndex === projects.length - 1) ? 0 : currentIndex + 1;
    showSlide();
}

// Add event listeners for buttons
document.querySelector('.scroll-btn.left').addEventListener('click', scrollLeft);
document.querySelector('.scroll-btn.right').addEventListener('click', scrollRight);

// Add images and initialize slider to display the first image
addImages();
showSlide();




function openLink(url) {
    window.open(url, '_blank');
}

function downloadResume() {
    const link = document.createElement('a');
    link.href = 'path/to/your/resume.pdf'; // Add the path to your resume here
    link.download = 'Arman_Dhuka_Resume.pdf';
    link.click();
}

