
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
        renderHomeEl();
    };

    if (event.target.matches('#aboutLi')) {
        renderAboutEl();
        burgerAnimation();
    };

    if (event.target.matches('#projectsLi')) {
        renderProjectsEl();
        burgerAnimation();
    };

    if (event.target.matches('#resumeLi')) {
        renderResumeEl();
        burgerAnimation();
    };

    if (event.target.matches('#contactLi')) {
        renderContactEl();
        burgerAnimation();
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
    elReset();
    console.log("Home element");
};

function renderAboutEl() {
    elReset();
    aboutEl.classList.toggle('hidden');
};

function renderProjectsEl() {
    elReset();
    projectsEl.classList.toggle('hidden');
};

function renderResumeEl() {
    elReset();
    resumeEl.classList.toggle('hidden');
};

function renderContactEl() {
    elReset();
    console.log("Contact element");
};

function elReset() {
    elArr.forEach( element => element.setAttribute('class','hidden'))
}
