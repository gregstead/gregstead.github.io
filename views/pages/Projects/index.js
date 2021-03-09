import ProjectCard from "../../components/ProjectCard/index.js";

const projectCardsData = [
  {
    title: "Eat Da Burger",
    image: "./assets/images/eatdaburger_image.png",
    deployedLink: "https://peaceful-inlet-93418.herokuapp.com/",
    githubLink: "https://github.com/gregstead/13_Eat_Da_Burger",
    description: `This app takes a name from user and creates a burger on a
        database. The burger can them be "devoured." The page will
        render a list of burgers available to devour and burgers that
        have been devoured.`,
  },
  {
    title: "Discomfort Zone",
    image: "./assets/images/discomfort_zone4x3.png",
    deployedLink: "https://megangerwick.github.io/discomfort_zone/",
    githubLink: "https://github.com/gregstead/discomfort_zone",
    description: `Discomfort Zone uses a default location starting in KC or
    confirms default location based on user’s browser. The user
    will enter a street address and how far they are willing to
    travel. Discomfort Zone will then list the several restaurants
    on the edge of the area that the user is willing to travel to.
    <br /><br />
    This project was created as the first project for the
    part-time coding bootcamp at the University of Kansas by Megan
    Gerwick, Biaka Zaidarhzauva, and Greg Stead`,
  },
  {
    title: "Employee Tracker",
    image: "./assets/images/employee_tracker4x3.png",
    deployedLink:
      "https://drive.google.com/file/d/13UkrkMyw6L76u-xx7RKj9JRczUeB1LFZ/view",
    githubLink: "https://github.com/gregstead/12_employee_tracker",
    description: `A content management system command line interface to make it
    easier for employers to manage the departments, roles, and
    employees in their companies.`,
  },
];

const projectCards = projectCardsData
  .map((project) => {
    return ProjectCard(project);
  })
  .join("");

const Projects = {
  render: async () => {
    const view = `
      <!-- Projects Section -->
      <section id="projectsEl" class="container">
        <div class="columns">${projectCards}</div>
      </section>
    `;
    return view;
  },
  after_render: async () => {},
};
export default Projects;
