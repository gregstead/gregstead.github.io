
// Hamburger and Nav Links animation handler

const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

// Click event handler
document.addEventListener('click', (event) => {
    // Prevent page from redirecting
    event.preventDefault();

    if (event.target.matches('.burger') || event.target.matches('.line')) {
        burgerAnimation();
    };

    if (event.target.matches('#HomeLi')) {
        renderHomeEl();
    };

    if (event.target.matches('#aboutLi')) {
        renderAboutEl();
    };

    if (event.target.matches('#projectsLi')) {
        renderProjectsEl();
    };

    if (event.target.matches('#resumeLi')) {
        renderResumeEl();
    };

    if (event.target.matches('#contactLi')) {
        renderContactEl();
    };

});

function burgerAnimation() {
    nav.classList.toggle('nav-active');

    // animate links in 
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 6 + .5}s`;
        };
    });

    // Burger animation
    burger.classList.toggle('toggle');
};

function renderHomeEl() {
    console.log("Home element");
};

function renderAboutEl() {
    console.log("About element");
};

function renderProjectsEl() {
    console.log("Projects element");
};

function renderResumeEl() {
    console.log("Resume element");
};

function renderContactEl() {
    console.log("Contact element");
};

