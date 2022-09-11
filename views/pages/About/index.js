// Link CSS module
const styleSrc = "./views/pages/About/style.css";
document.head.innerHTML += `<link type="text/css" rel="stylesheet" href="${styleSrc}"> `;

const About = {
  render: async () => {
    const view = `
    <section id="aboutEl" class="container about-container">
    
    
    <div class="about-content-container">
        <div class="main-image">
            <img id="about-image" src="./assets/images/greg_kelce_kisses.jpeg" alt="Greg and his dog Kelce" class="m-0 p-5" />
        </div>    
        </div>

        <div class="about-text">
            <p id="first-paragraph">Hi, I'm Greg! I am a web developer in Sarasota, Florida. I bring a wide breadth of
                knowledge,
                experience, and creativity to
                collaborative problem-solving. Currently, I manage the website and web services for <a href="https://sarasotaorchestra.org" target="_blank" rel="noopener noreferrer">Sarasota Orchestra</a>.
            </p>
            <hr>

            <p id="second-paragraph">I am also an avid musician and freelance as an oboist in the Gulf Coast area. I have previously 
                performed with the <a href="https://www.kcsymphony.org/" target="_blank"
                    rel="noopener noreferrer">Kansas
                    City
                    Symphony</a>, served as Acting Principal Oboe of the <a href="https://www.springfieldmosymphony.org/"
                    target="_blank" rel="noopener noreferrer">Springfield Symphony</a>, and as a section oboe with the <a href="https://themiso.org/"
                    target="_blank" rel="noopener noreferrer">Miami Symphony Orchestra</a>
                </a>.
            </p>
        </div>
        <div class="centered-child socio-icons">

            <a class="p-3 is-size-1" href="https://github.com/gregstead" target="_blank" rel="noopener noreferrer"><i
                    id="fa-github" class="fab fa-github"></i></a>

        </div>
    

</section>
    `;
    return view;
  },
  after_render: async () => {
    null;
  },
};

export default About;
