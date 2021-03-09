let Projects = {
  render: async () => {
    let view = `
      <!-- Projects Section -->
      <section id="projectsEl">
        <div class="columns">
          <!-- Card -->
          <div class="column is-one-third">
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img
                    src="./assets/images/eatdaburger_image.png"
                    alt="Placeholder image"
                  />
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-left">
                    <figure class="image is-48x48">🍔</figure>
                  </div>
                  <div class="media-content">
                    <p class="title is-4">Eat Da Burger</p>
                    <p class="subtitle is-6">
                      <a
                        id="proj1"
                        href="https://peaceful-inlet-93418.herokuapp.com/"
                        >deployed app </a
                      >||
                      <a
                        id="git1"
                        href="https://github.com/gregstead/13_Eat_Da_Burger"
                        >GitHub repo</a
                      >
                    </p>
                  </div>
                </div>
                <div class="content">
                  This app takes a name from user and creates a burger on a
                  database. The burger can them be "devoured." The page will
                  render a list of burgers available to devour and burgers that
                  have been devoured.
                </div>
              </div>
            </div>
          </div>
          <!-- Card -->
          <div class="column is-one-third">
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img
                    src="./assets/images/discomfort_zone4x3.png"
                    alt="Placeholder image"
                  />
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-left">
                    <figure class="image is-48x48">🖼</figure>
                  </div>
                  <div class="media-content">
                    <p class="title is-4">DiscomfortZone</p>
                    <p class="subtitle is-6">
                      <a
                        id="proj2"
                        href="https://megangerwick.github.io/discomfort_zone/"
                        >deployed app </a
                      >||
                      <a
                        id="git2"
                        href="https://github.com/gregstead/discomfort_zone"
                        >GitHub repo</a
                      >
                    </p>
                  </div>
                </div>
                <div class="content">
                  Discomfort Zone uses a default location starting in KC or
                  confirms default location based on user’s browser. The user
                  will enter a street address and how far they are willing to
                  travel. Discomfort Zone will then list the several restaurants
                  on the edge of the area that the user is willing to travel to.
                  <br /><br />
                  This project was created as the first project for the
                  part-time coding bootcamp at the University of Kansas by Megan
                  Gerwick, Biaka Zaidarhzauva, and Greg Stead
                </div>
              </div>
            </div>
          </div>
          <!-- Card -->
          <div class="column is-one-third">
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img
                    src="./assets/images/employee_tracker4x3.png"
                    alt="Placeholder image"
                  />
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-left">
                    <figure class="image is-48x48">📇</figure>
                  </div>
                  <div class="media-content">
                    <p class="title is-4">Employee Tracker</p>
                    <p class="subtitle is-6">
                      <a
                        id="proj3"
                        href="https://drive.google.com/file/d/13UkrkMyw6L76u-xx7RKj9JRczUeB1LFZ/view"
                        >video demonstration </a
                      >||
                      <a
                        id="git3"
                        href="https://github.com/gregstead/12_employee_tracker"
                        >GitHub repo</a
                      >
                    </p>
                  </div>
                </div>

                <div class="content">
                  A content management system command line interface to make it
                  easier for employers to manage the departments, roles, and
                  employees in their companies.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
    return view;
  },
  after_render: async () => {},
};
export default Projects;
