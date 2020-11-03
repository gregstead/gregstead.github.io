
// Cache DOM elements

const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

const homeEl = document.getElementById('homeEl');
const aboutEl = document.getElementById('aboutEl');
const projectsEl = document.getElementById('projectsEl');
const resumeEl = document.getElementById('resumeEl');
const contactEl = document.getElementById('contactEl');

const elArr = [homeEl, aboutEl, projectsEl, resumeEl, contactEl];

// Click event handler
document.addEventListener('click', (event) => {
    // Prevent page from redirecting
    event.preventDefault();

    if (event.target.matches('.burger') || event.target.matches('.line')) {
        burgerAnimation();
    };

    if (event.target.matches('#homeLi')) {
        elReset();
        renderHomeEl();
    };

    if (event.target.matches('#aboutLi')) {
        elReset();
        renderAboutEl();
        burgerAnimation(); // Needs to be fixed for non-mobile
    };

    if (event.target.matches('#projectsLi')) {
        elReset();
        renderProjectsEl();
        burgerAnimation(); // Needs to be fixed for non-mobile
    };

    if (event.target.matches('#resumeLi')) {
        elReset();
        renderResumeEl();
        burgerAnimation(); // Needs to be fixed for non-mobile
    };

    if (event.target.matches('#contactLi')) {
        elReset();
        renderContactEl();
        burgerAnimation(); // Needs to be fixed for non-mobile
    };

    console.log("event.target: ", event.target);
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

function renderAboutEl() {};

function renderProjectsEl() {
    projectsEl.setAttribute('class', '');
};

function renderResumeEl() {
    console.log("Resume element");
};

function renderContactEl() {
    console.log("Contact element");
};

function elReset() {
    elArr.forEach( element => element.setAttribute('class','hidden'))
}
