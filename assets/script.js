
// Hamburger and Nav Links animation handler
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    // Toggle nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        // animate links in 
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + .5}s`;
            };
        });

        // Burger animation
        burger.classList.toggle('toggle');
    });
}

navSlide();