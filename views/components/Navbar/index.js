// Link CSS module
const styleSrc = "./views/components/Navbar/style.css";
document.head.innerHTML += `<link type="text/css" rel="stylesheet" href="${styleSrc}"> `;

let Navbar = {
  render: async () => {
    let view = `
    <header>
            <div class="logo">
                <h1>Greg Stead</h4>
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

    function logoText(scrollY, aboutEl, projectsEl, resEl) {
      if (scrollY >= 0 && scrollY < logoHeight) {
        logo.innerText = "Greg Stead";
      }
      if (aboutEl.y <= 0 && aboutEl.y > aboutEl.height * -1) {
        logo.innerText = "About";
      }
      if (projectsEl.y <= logoHeight && projectsEl.y > projectsEl.height * -1) {
        logo.innerText = "Projects";
      }
      if (resEl.y <= logoHeight && resEl.y > resEl.height * -1) {
        logo.innerText = "Resume";
      }
    }

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

    function darkThemeToggle(scrollY, aboutEl, projectsEl, resEl) {
      if (scrollY >= 0 && scrollY < logoHeight) {
        switchToLight();
      }
      if (aboutEl.y <= 0 && aboutEl.y > aboutEl.height * -1) {
        switchToDark();
      }
      if (resEl.y <= logoHeight && resEl.y > resEl.height * -1) {
        switchToLight();
      }
    }

    document.addEventListener("scroll", () => {
      const aboutEl = document.querySelector("#aboutEl").getClientRects()[0];
      const projectsEl = document
        .querySelector("#projectsEl")
        .getClientRects()[0];
      const resEl = document.querySelector("#resEl").getClientRects()[0];

      logoText(window.scrollY, aboutEl, projectsEl, resEl);
      darkThemeToggle(window.scrollY, aboutEl, projectsEl, resEl);
    });
  },
};

export default Navbar;
