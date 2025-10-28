// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('nav a');

    // Toggle menu when hamburger button is clicked
    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');

        // Change icon between hamburger and X
        if (nav.classList.contains('active')) {
            menuToggle.innerHTML = '✕';
        } else {
            menuToggle.innerHTML = '☰';
        }
    });

    // Close menu when a navigation link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                nav.classList.remove('active');
                menuToggle.innerHTML = '☰';
            }
        });
    });

    // Close menu when window is resized above mobile breakpoint
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            nav.classList.remove('active');
            menuToggle.innerHTML = '☰';
        }
    });
});
