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
    const background = document.querySelector("canvas#canvas");

    const aboutEl = document.querySelector(".about-text").getClientRects()[0];

    function toggleClass(node, className) {
      node.classList.toggle(className);
    }

    function logoText(scrollY) {
      if (scrollY >= 0 && scrollY < aboutEl.y) {
        logo.innerText = "Greg Stead";
      }
      if (scrollY >= aboutEl.y && scrollY < aboutEl.bottom) {
        logo.innerText = "About";
      }
    }

    function darkThemeToggle(scrollY) {
      if (scrollY >= aboutEl.y) {
        background.classList.add("noise-dark");
        background.classList.remove("noise-light");
      }
    }

    document.addEventListener("scroll", () => {
      logoText(window.scrollY);
      darkThemeToggle(scrollY);
    });
  },
};

export default Navbar;
