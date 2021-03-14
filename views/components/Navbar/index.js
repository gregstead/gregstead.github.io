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
            <nav>
            <ul class="header-links">
            
                <li><a href="/#/about">about</a></li>
                <li><a href="/#/projects">projects</a></li>
                <li><a href="/#/resume">resume</a></li>
            </ul>
          </nav>
          <label for="nav-toggle" class="nav-toggle-label">
          <span id="burger-top"></span>
          <span id="burger-middle"></span>
          <span id="burger-bottom"></span>
          </label>
  </header>`;
    return view;
  },
  after_render: async () => {},
};

export default Navbar;
