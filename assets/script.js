
// Cache DOM elements

const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

const homeEl = document.getElementById('homeEl');
const aboutEl = document.getElementById('aboutEl');
const projectsEl = document.getElementById('projectsEl');
const resumeEl = document.getElementById('resumeEl');
const contactEl = document.getElementById('contactEl');

const projectsArr = [
    {
        title: 'Discomfort Zone',
        image: 'https://via.placeholder.com/150X75',
        url: 'https://gregstead.github.io/discomfort_zone/',
    },
    {
        title: 'Weather Dashboard',
        image: 'https://via.placeholder.com/150X75',
        url: 'https://gregstead.github.io/06_weather_dashboard/',
    },
    {
        title: 'Workday Scheduler',
        image: 'https://via.placeholder.com/150X75',
        url: 'https://gregstead.github.io/05_workday_scheduler/',
    },
    {
        title: 'Password Generator',
        image: 'https://via.placeholder.com/150X75',
        url: 'https://gregstead.github.io/03_password_generator/',
    }
]

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

    const projectsContainer = document.createElement('div');
    projectsContainer.setAttribute('class', 'container');

    const projectsTitle = document.createElement('h2');
    projectsTitle.setAttribute('class', '');
    projectsTitle.innerText = 'Projects';
    projectsContainer.appendChild(projectsTitle)

    for (let i = 0; i < projectsArr.length; i++) {
        let cardDirection = 'card-left';
        if (i % 2 === 1) {
            cardDirection = 'card-right'
        }

        const projectTitle = document.createElement('p');
        projectTitle.setAttribute('class', '');
        projectTitle.innerText = projectsArr[i].title;

        const projectImage = document.createElement('img');
        projectImage.setAttribute('src', projectsArr[i].image);

        const projectLinkTag = document.createElement('a');
        projectLinkTag.setAttribute('href', projectsArr[i].url);
        projectLinkTag.innerText = 'LINK'

        const projectCard = document.createElement('div');
        projectCard.setAttribute('class', 'card ' + cardDirection);

        projectCard.appendChild(projectTitle)
        projectCard.appendChild(projectImage)
        projectCard.appendChild(projectLinkTag)

        projectsContainer.appendChild(projectCard);
    }

    projectsEl.appendChild(projectsContainer);
};

function renderResumeEl() {
    console.log("Resume element");
};

function renderContactEl() {
    console.log("Contact element");
};

function emptyElement(element) {
    if (element.firstChild) {
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
    }
}
