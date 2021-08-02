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
            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	            width="459.562px" height="459.562px" viewBox="0 0 459.562 459.562" style="enable-background:new 0 0 459.562 459.562;"
	            xml:space="preserve">
                <g>
                    <path d="M229.781,0c-81.569,0-147.93,63.047-147.93,140.543c0,54.028,20.928,84.706,41.178,114.388
                        c16.882,24.736,34.339,50.313,35.394,84.912c0.26,8.539,6.353,15.552,14.384,17.289c-7.475,2.291-12.912,9.244-12.912,17.47
                        c0,7.247,4.23,13.489,10.347,16.442c-6.116,2.954-10.347,9.196-10.347,16.444c0,10.091,8.18,18.271,18.271,18.271h11.167
                        c3.45,19.216,20.24,33.801,40.448,33.801c20.208,0,37-14.585,40.449-33.801h11.166c10.092,0,18.271-8.181,18.271-18.271
                        c0-7.248-4.23-13.49-10.348-16.444c6.117-2.953,10.348-9.195,10.348-16.442c0-8.189-5.389-15.12-12.812-17.44
                        c8.025-1.742,14.113-8.752,14.375-17.288c1.053-34.586,18.482-60.163,35.354-84.922c20.221-29.668,41.127-60.346,41.127-114.408
                        C377.71,63.047,311.351,0,229.781,0z M306.371,234.396c-15.518,22.771-34.314,50.355-40.014,86.645l-18.83-0.005l26.897-153.13
                        c0.015-0.083,0.028-0.166,0.042-0.249c1.43-9.385-1.296-18.896-7.479-26.093c-5.983-6.964-14.709-11.121-23.342-11.121
                        c-4.852,0-9.609,1.318-13.877,3.762c-4.269-2.444-9.024-3.762-13.877-3.762c-8.559,0-16.967,4.064-23.071,11.15
                        c-6.308,7.324-9.134,16.813-7.753,26.035c0.014,0.093,0.029,0.185,0.045,0.277l26.897,153.12l-18.714-0.006
                        c-5.705-36.312-24.54-63.911-40.091-86.696c-18.68-27.382-34.812-51.029-34.812-93.78c0-57.347,49.968-104.001,111.388-104.001
                        c61.419,0,111.388,46.654,111.388,104.001C341.169,183.337,325.05,206.987,306.371,234.396z M229.768,293.268l-22.669-129.053
                        c-0.537-3.92,1.643-6.947,2.612-8.071c1.783-2.069,4.208-3.406,6.18-3.406c2.472,0,4.369,1.851,5.28,2.953
                        c2.118,2.566,5.27,4.051,8.597,4.051c3.326,0,6.479-1.485,8.597-4.051c0.912-1.103,2.809-2.953,5.281-2.953
                        c2.189,0,4.653,1.286,6.43,3.354c1.133,1.319,2.936,4.115,2.365,8.103L229.768,293.268z"/>
                </g>
            </svg>
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
