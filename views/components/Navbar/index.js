// Link CSS module
const styleSrc = "./views/components/Navbar/style.css";
document.head.innerHTML += `<link type="text/css" rel="stylesheet" href="${styleSrc}"> `;

let Navbar = {
  render: async () => {
    let view = `
    <header>
            <div class="logo">
                <h1>Greg Stead</h1>
            </div>
            <input type="checkbox" class="nav-toggle" id="nav-toggle"/>
            
  </header>`;
    return view;
  },
  after_render: async () => {
    const logo = document.querySelector(".logo h1");
    const logoHeight = logo.getClientRects()[0].height;
    const body = document.querySelector("body");
    const background = document.querySelector("canvas#canvas");

    function switchToDark() {
      background.classList.add("noise-dark");
      body.classList.add("body-dark");
      background.classList.remove("noise-light");
      body.classList.remove("body-light");
    }
    function switchToLight() {
      background.classList.add("noise-light");
      body.classList.add("body-light");
      background.classList.remove("noise-dark");
      body.classList.remove("body-dark");
    }
    function logoFadeOut() {
      logo.classList.add("logo-fade");
    }

    function logoFadeIn() {
      logo.classList.remove("logo-fade");
    }

    document.addEventListener("scroll", () => {
      // Cache DOM
      const aboutEl = document.querySelector("#aboutEl");
      const aboutImageTop = aboutEl
        .querySelector("#about-image")
        .getClientRects()[0].top;
      const aboutImageBottom = aboutEl
        .querySelector("#about-image")
        .getClientRects()[0].bottom;
      const aboutTextTop = aboutEl
        .querySelector("#first-paragraph")
        .getClientRects()[0].top;
      const aboutElBottom = aboutEl
        .querySelector("div.socio-icons")
        .getClientRects()[0].bottom;
      const projectsEl = document.querySelector("#projectsEl");
      const projectsElTop = projectsEl.querySelector("div").getClientRects()[0]
        .top;
      const projectsElBottom = projectsEl.getClientRects()[0].bottom;
      const resEl = document.querySelector("#resEl");
      const resElBottom = resEl.getClientRects()[0].bottom;
      const resElTop = resEl.querySelector("h4").getClientRects()[0].top;

      // If scroll is between about image and top...
      if (scrollY >= 0 && aboutImageTop > logoHeight) {
        // ... set text, fade back in (if out), change (back) to light theme
        logo.innerText = "Greg Stead";
        logoFadeIn();
        switchToLight();
      }
      // If image top intersects logo div
      else if (aboutImageTop < logoHeight && aboutImageBottom > logoHeight) {
        // ...
        logoFadeOut();
        switchToDark();
      }
      // If image bottom intersects logo div...
      else if (aboutImageBottom < logoHeight && aboutTextTop > logoHeight) {
        // ... set text, fade logo back in,
        logo.innerText = "About";
        logoFadeIn();
      }
      // If paragraph text ''
      else if (aboutTextTop < logoHeight && aboutElBottom > logoHeight) {
        // ...
        logoFadeOut();
      }
      // If about element bottom ''
      else if (aboutElBottom < 0 && projectsElTop > logoHeight) {
        // ... set text, fade in
        logo.innerText = "Projects";
        logoFadeIn();
      }
      // If Project element top intersects with logo...
      else if (projectsElTop < logoHeight && projectsElBottom > logoHeight) {
        // ... fade out
        logoFadeOut();
      }
      // If about element bottom ''
      else if (projectsElBottom < logoHeight && resElTop > logoHeight) {
        // ... set text, fade in
        logo.innerText = "Resume";
        logoFadeIn();
      }
      // If resume top intersects with logo...
      else if (resElTop < logoHeight && resElBottom > logoHeight) {
        // ... fade out
        logoFadeOut();
      }
    });
  },
};

export default Navbar;
