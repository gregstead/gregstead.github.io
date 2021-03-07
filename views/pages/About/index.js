let About = {
  render: async () => {
    let view = `
    <!-- About Section -->
    <section id="aboutEl" class="">
      <div class="container">
        <div class="columns is-mobile">
          <div class="column is-10 is-offset-1">
            <div class="columns">
              <div class="column is-10 is-offset-1">
                <img src="./assets/images/0.jpeg" alt="Greg Stead headshot" class="rounded m-0 p-5" />
              </div>
            </div>

            <div class="about-text">
              <p>Hi, I'm Greg! I am a full stack web developer trained in legacy technologies and the modern MERN stack.
                I bring a wide breadth of knowledge, experience, and creativity to
                collaborative problem-solving. Currently, I help deliver innovation, value, and the best possible
                experiences
                to entertainment venues as an arcade support representative at <a href="https://amusementconnect.com/"
                  id="AmCo">Amusement
                  Connect</a>
              </p>
              <hr>
              <p>I am also an avid musician and freelance as an oboist in the Kansas City metro. I have
                performed with the <a href="https://www.kcsymphony.org/" id="kcsymph">Kansas City
                  Symphony</a> and was previously a member of the <a href="https://www.springfieldmosymphony.org/"
                  id="sso">Springfield</a> and <a href="https://themiso.org/" id="miso">Miami</a>
                </a>Symphony Orchestras.
              </p>
            </div>
            <div class="">
              <a class="p-3 is-size-1" href=""><i id="fa-linkedin-in" class="fab fa-linkedin-in"></i></a>
              <a class="p-3 is-size-1" href=""><i id="fa-github" class="fab fa-github"></i></a>
              <a class="p-3 is-size-1" href=""><i id="fa-twitter" class="fab fa-twitter"></i></a>
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

export default About;
