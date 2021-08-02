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
            <svg class="svg-kansas"    
                width="5in"
                height="5in"
                viewBox="0 0 200 200"
                version="1.1">
                <g stroke-width="1.5" transform="translate(29.060579,-151.97838)">
                <path class="svg-kansas-path" 
                    d="M 122.54308,267.19943 4.8108515,266.66489 7.0826423,207.73196 108.51143,207.33105 c 0,0 1.20271,-0.80181 1.33635,0.66818 0.13363,1.46998 3.4745,2.00452 3.4745,2.00452 0,0 1.87089,-1.46998 2.13815,0 0.23443,1.28933 1.7644,1.6602 -0.10039,3.03187 -0.26128,0.19219 0.19824,0.91353 -0.24516,1.12702 -2.69393,1.37776 -0.60158,5.65979 2.21644,8.13551 3.34087,2.80633 4.00905,5.47902 4.00905,5.47902 z" />
                </g>
          </svg>
        </div>    
        </div>

        <div class="about-text">
            <p id="first-paragraph">Hi, I'm <span class="greg-name">Greg</span>! I am a web developer in <span class="kansas-text">Overland Park, Kansas</span>. I bring a wide breadth of
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
    //   SVG arrow animation setup
    const arrow_line = document.querySelector(".arrow1-line");
    const arrow_line_length = arrow_line.getTotalLength();
    arrow_line.style.strokeDasharray =
      arrow_line_length + " " + arrow_line_length;
    arrow_line.style.strokeDashoffset = arrow_line_length;

    const arrow_arrow = document.querySelector(".arrow1-arrow");
    const arrow_arrow_length = arrow_arrow.getTotalLength();
    arrow_arrow.style.strokeDasharray =
      arrow_arrow_length + " " + arrow_arrow_length;
    arrow_arrow.style.strokeDashoffset = arrow_arrow_length;

    let lineHandle = 0;
    let currentLineFrame = 0;

    function draw_arrow_line() {
      const total_frames = 60;
      const progress = currentLineFrame / total_frames;
      if (progress > 1) {
        window.cancelAnimationFrame(lineHandle);
        return 0;
      } else {
        currentLineFrame++;
        arrow_line.style.strokeDashoffset = Math.floor(
          arrow_line_length * (1 - progress)
        );
      }
      lineHandle = window.requestAnimationFrame(draw_arrow_line);
    }

    let arrowHandle = 0;
    let currentArrowFrame = 0;

    function draw_arrow_arrow() {
      const total_frames = 20;
      const progress = currentArrowFrame / total_frames;
      if (progress > 1) {
        window.cancelAnimationFrame(arrowHandle);
        return 0;
      } else {
        currentArrowFrame++;
        arrow_arrow.style.strokeDashoffset = Math.floor(
          arrow_arrow_length * (1 - progress)
        );
      }
      arrowHandle = window.requestAnimationFrame(draw_arrow_arrow);
    }

    function arrowReset() {
      lineHandle = 0;
      currentLineFrame = 0;
      arrowHandle = 0;
      currentArrowFrame = 0;

      arrow_line.style.strokeDasharray =
        arrow_line_length + " " + arrow_line_length;
      arrow_line.style.strokeDashoffset = arrow_line_length;
      arrow_arrow.style.strokeDasharray =
        arrow_arrow_length + " " + arrow_arrow_length;
      arrow_arrow.style.strokeDashoffset = arrow_arrow_length;
    }

    const gregName = document.querySelector(".greg-name");
    gregName.addEventListener("mouseover", () => {
      draw_arrow_line();
      draw_arrow_arrow();
    });
    gregName.addEventListener("mouseout", () => {
      setTimeout(() => {
        arrowReset();
      }, 1500);
    });

    // SVG Kansas animation setup

    const svg_kansas = document.querySelector(".svg-kansas-path");
    const svg_kansas_length = svg_kansas.getTotalLength();
    svg_kansas.style.strokeDasharray =
      svg_kansas_length + " " + svg_kansas_length;
    svg_kansas.style.strokeDashoffset = svg_kansas_length;

    let kansasHandle = 0;
    let currentKansasFrame = 0;

    function draw_kansas() {
      const total_frames = 70;
      const progress = currentKansasFrame / total_frames;
      if (progress > 1) {
        window.cancelAnimationFrame(kansasHandle);
        return 0;
      } else {
        currentKansasFrame++;
        svg_kansas.style.strokeDashoffset = Math.floor(
          svg_kansas_length * (1 - progress)
        );
      }
      window.requestAnimationFrame(draw_kansas);
    }

    function kansas_reset() {
      kansasHandle = 0;
      currentKansasFrame = 0;
      svg_kansas_length + " " + svg_kansas_length;
      svg_kansas.style.strokeDashoffset = svg_kansas_length;
    }

    const kansasText = document.querySelector(".kansas-text");
    kansasText.addEventListener("mouseover", () => {
      draw_kansas();
    });
    kansasText.addEventListener("mouseout", () => {
      setTimeout(() => {
        kansas_reset();
      }, 1500);
    });
  },
};

export default About;
