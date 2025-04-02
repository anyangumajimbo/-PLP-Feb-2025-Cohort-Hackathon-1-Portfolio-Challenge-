const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Toggle the navigation menu when the hamburger icon is clicked:


const hamburger = document.getElementById('hamburger'); // Select the hamburger menu
const navMenu = document.querySelector('.nav-links'); // Select the navigation links container

// Add a click event listener to the hamburger menu
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active'); // Toggle the 'active' class on the nav-links
});

