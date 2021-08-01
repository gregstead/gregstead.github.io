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
        <svg class="arrow" xmlns="http://www.w3.org/2000/svg" width="115" height="55">
            <g fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10">
                <path class="arrow1-arrow" d="M105.316 14.914c.636-4.341 4.301-6.633 5.712-10.586-3.192.257-9.689.487-12.638-1.149"/>
                <path class="arrow1-line" d="M3.972 42.006c11.277 3.539 21.928 4.074 33.094-.4 7.071-2.834 26.178-12.746 24.99-22.787-1.262-10.659-18.22-.537-22.249 2.65-6.946 5.496-17.75 19.106-8.208 27.183 7.722 6.535 22.411 1.982 28.51-4.781 6.458-7.162 1.716-13.428-6.613-14.932-3.418-.616-16.125 1.604-7.122-.591 20.41-4.973 40.229-13.489 59.847-20.843"/>
            </g>
        </svg>
        </div>
    
            
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
  after_render: async () => {
    //   SVG animation
    const arrow_line = document.querySelector(".arrow1-line");
    const arrow_line_length = arrow_line.getTotalLength();
    arrow_line.style.strokeDasharray =
      arrow_line_length + " " + arrow_line_length;
    arrow_line.style.strokeDashoffset = arrow_line_length;

    const arrow_arrow = document.querySelector(".arrow1-arrow");
    const arrow_arrow_length = arrow_arrow.getTotalLength();

    let handle = 0;
    let currentFrame = 0;

    function draw_arrow() {
      const total_frames = 60;
      let progress = currentFrame / total_frames;
      if (progress > 1) {
        window.cancelAnimationFrame(handle);
      } else {
        currentFrame++;
        arrow_line.style.strokeDashoffset = Math.floor(
          arrow_line_length * (1 - progress)
        );
      }
      handle = window.requestAnimationFrame(draw_arrow);
    }

    draw_arrow();
  },
};

export default About;
