let Navbar = {
  render: async () => {
    let view = `
    <header>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <div class="is-size-2 is-half p-3">
          Greg Stead
        </div>

        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbar-links">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbar-links" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item" id="AboutBurgerlink"> About </a>

          <a class="navbar-item" id="ProjectsBurgerlink"> Projects </a>

          <a class="navbar-item" id="ResumeBurgerlink"> Resume </a>

          <!-- <a class="navbar-item" id="ContactBurgerlink"> Contact </a> -->

        </div>
      </div>

      <div class="navbar-end">
      </div>
      </div>
    </nav>
  </header>
      `;
    return view;
  },
  after_render: async () => {},
};

export default Navbar;
