
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

const projectsArr = [
    {
        title: 'Discomfort Zone',
        image: 'https://via.placeholder.com/150X75',
        url: 'https://gregstead.github.io/discomfort_zone/',
        description: "Something incredible is waiting to be known a still more glorious dawn awaits star stuff harvesting star light cosmos Orion's sword culture. Trillion invent the universe as a patch of light shores of the cosmic ocean a billion trillion concept of the number one? Rich in heavy atoms two ghostly white figures in coveralls and helmets are softly dancing vastness is bearable only through love venture stirred by starlight from which we spring and billions upon billions upon billions upon billions upon billions upon billions upon billions",
    },
    {
        title: 'Weather Dashboard',
        image: 'https://via.placeholder.com/150X75',
        url: 'https://gregstead.github.io/06_weather_dashboard/',
        description: "Encyclopaedia galactica courage of our questions of brilliant syntheses billions upon billions brain is the seed of intelligence cosmos. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium gathered by gravity a very small stage in a vast cosmic arena quis nostrum exercitationem ullam corporis suscipit laboriosam a very small stage in a vast cosmic arena nisi ut aliquid ex ea commodi consequatur. From which we spring extraordinary claims require extraordinary evidence the carbon in our apple pies radio telescope Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium Tunguska event and billions upon billions upon billions upon billions upon billions upon billions upon billions.",
    },
    {
        title: 'Workday Scheduler',
        image: 'https://via.placeholder.com/150X75',
        url: 'https://gregstead.github.io/05_workday_scheduler/',
        description: "Jean-François Champollion brain is the seed of intelligence not a sunrise but a galaxyrise something incredible is waiting to be known hydrogen atoms realm of the galaxies. Vanquish the impossible light years Orion's sword Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium dispassionate extraterrestrial observer are creatures of the cosmos? Courage of our questions sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem qui dolorem ipsum quia dolor sit amet Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit Orion's sword citizens of distant epochs?",
    },
    {
        title: 'Password Generator',
        image: 'https://via.placeholder.com/150X75',
        url: 'https://gregstead.github.io/03_password_generator/',
        description: "Quasar muse about sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur cosmos? Explorations the only home we've ever known vastness is bearable only through love made in the interiors of collapsing stars made in the interiors of collapsing stars take root and flourish and billions upon billions upon billions upon billions upon billions upon billions upon billions.",
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

function renderProjectsEl() {};

function renderResumeEl() {
    console.log("Resume element");
};

function renderContactEl() {
    console.log("Contact element");
};

function elReset() {
    elArr.forEach( element => element.setAttribute('class','hidden'))
}
