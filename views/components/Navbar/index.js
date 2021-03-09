// Link CSS module
const styleSrc = "./views/components/Navbar/style.css";
document.head.innerHTML += `<link type="text/css" rel="stylesheet" href="${styleSrc}"> `;

let Navbar = {
  render: async () => {
    let view = `
    <nav>
            <div class="logo">
                <h4>Greg Stead</h4>
            </div>
            <ul class="nav-links">
                <li><a href="/#/home">home</a></li>
                <li><a href="/#/about">about</a></li>
                <li><a href="/#/projects">projects</a></li>
                <li><a href="/#/reasume">resume</a></li>
            </ul>
            <div class="burger" onClick="burgerClickHandler(this)">
                <div class="burger-line" id="burger-line-1"></div>
                <div class="burger-line" id="burger-line-2"></div>
                <div class="burger-line" id="burger-line-3"></div>
            </div>
        </nav>`;
    return view;
  },
  after_render: async () => {},
};

export default Navbar;
