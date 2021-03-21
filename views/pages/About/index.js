// Link CSS module
const styleSrc = "./views/pages/About/style.css";
document.head.innerHTML += `<link type="text/css" rel="stylesheet" href="${styleSrc}"> `;

const About = {
  render: async () => {
    const view = `
    <section id="aboutEl" class="container about-container">
    
            <div class="main-image">
                <img id="about-image" src="./assets/images/greg_kelce_kisses.jpeg" alt="Greg and his dog Kelce" class="m-0 p-5" />
            </div>
        

        <div class="about-text">
            <p id="first-paragraph">Hi, I'm Greg! I am a web developer in Overland Park, Kansas. I bring a wide breadth of
                knowledge,
                experience, and creativity to
                collaborative problem-solving. Currently, I help deliver innovation, value, and the best possible
                experiences
                to entertainment venues as an applications engineer at <a href="https://amusementconnect.com/"
                    target="_blank" rel="noopener noreferrer">Amusement
                    Connect</a>
            </p>
            <hr>
            <p id="second-paragraph">I am also an avid musician and freelance as an oboist in the Kansas City metro. I have
                performed with the <a href="https://www.kcsymphony.org/" target="_blank"
                    rel="noopener noreferrer">Kansas
                    City
                    Symphony</a> and was previously a member of the <a href="https://www.springfieldmosymphony.org/"
                    target="_blank" rel="noopener noreferrer">Springfield</a> and <a href="https://themiso.org/"
                    target="_blank" rel="noopener noreferrer">Miami</a>
                </a>Symphony Orchestras.
            </p>
        </div>
        <div class="centered-child socio-icons">
            <a class="p-3 is-size-1" href="https://www.linkedin.com/in/gregstead/" target="_blank"
                rel="noopener noreferrer"><i id="fa-linkedin-in" class="fab fa-linkedin-in"></i></a>
            <a class="p-3 is-size-1" href="https://github.com/gregstead" target="_blank" rel="noopener noreferrer"><i
                    id="fa-github" class="fab fa-github"></i></a>
            <a class="p-3 is-size-1" href="https://twitter.com/soylentgreg" target="_blank" rel="noopener noreferrer"><i
                    id="fa-twitter" class="fab fa-twitter"></i></a>
        </div>

</section>
    `;
    return view;
  },
  after_render: async () => {},
};

export default About;
