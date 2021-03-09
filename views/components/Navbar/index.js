let Navbar = {
  render: async () => {
    let view = `
    <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="#/home">
        Greg Stead
      </a>
  
      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
  
    <div id="navbar-menu" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item" href="#/home">
          Home
        </a>
        <a class="navbar-item" href="#/about">
        About
      </a>
        <a class="navbar-item" href="#/projects">
          Projects
        </a>

        <a class="navbar-item" href="#/resume">
          Resume
        </a>
    </div>
  </nav>`;
    return view;
  },
  after_render: async () => {},
};

export default Navbar;
