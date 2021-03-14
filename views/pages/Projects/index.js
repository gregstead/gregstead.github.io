// Link CSS module
const styleSrc = "./views/pages/Projects/style.css";
document.head.innerHTML += `<link type="text/css" rel="stylesheet" href="${styleSrc}"> `;

import ProjectCard from "../../components/ProjectCard/index.js";

const projectCardsData = [
  {
    title: "Island Guru",
    image: "./assets/images/islandGuru_logo.png",
    deployedLink: "https://island-guru.herokuapp.com/",
    githubLink: "https://github.com/gregstead/island_guru/",
    description: `I built the back end for an Animal Crossing New Horizons React App that displays information useful in the game. Users can log in, search for information about game items, look up game characters, and favorite items.
    <br /><br />
    This project was created as the capstone project for the
    Full Stack Coding Bootcamp at the University of Kansas by Michelle McConville, Kendra Hallam, and Greg Stead`,
  },
  {
    title: "Leave a Note",
    image: "./assets/images/leaveANote_logo.png",
    deployedLink: "https://project-leave-a-note.herokuapp.com/",
    githubLink: "https://github.com/gregstead/Leave_A_Note",
    description: `I built out the database and backend functionality for Leave A Note, an app that allows users to log in and leave a note for their groups. It also allows them to view notes left for them by other users in their group.
    <br /><br />
    This project was created as the second milestone project for the
    Full Stack Coding Bootcamp at the University of Kansas by Raihan Akter, Ben Galloway, Julian Huynh, and Greg Stead`,
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
  {
    title: "Weather Dashboard",
    image: "./assets/images/weather_dashboard.png",
    deployedLink: "https://peaceful-inlet-93418.herokuapp.com/",
    githubLink: "https://github.com/gregstead/13_Eat_Da_Burger",
    description: `A simple weather dashboard built with Materialize and OpenWeatherMap APIs`,
  },
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
      <section id="projectsEl" class="container projects-container">
        <div>${projectCards}</div>
      </section>
    `;
    return view;
  },
  after_render: async () => {},
};
export default Projects;
