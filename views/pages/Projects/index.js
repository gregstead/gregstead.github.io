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
    image: "./assets/images/note_logo.png",
    deployedLink: "https://leave-a-note-v2.herokuapp.com/",
    githubLink: "https://github.com/gregstead/Leave_A_Note",
    description: `I initially built the database and server for this project. Since the group disbanded, I have also revamped the front-end. This is a digital message board with a MySQL user database.
    <br /><br />
    This project was created as the second milestone project for the
    Full Stack Coding Bootcamp at the University of Kansas by Raihan Akter, Ben Galloway, Julian Huynh, and Greg Stead`,
  },
  {
    title: "Eat Da Burger",
    image: "./assets/images/hamburger_1f354.png",
    deployedLink: "https://peaceful-inlet-93418.herokuapp.com/",
    githubLink: "https://github.com/gregstead/13_Eat_Da_Burger",
    description: `An exercise in building a CRUD application with Express, MySQL, and Node. This app takes the name of a burger form the user and adds it to a database. The burger can then be "devoured" or marked deleted.`,
  },
  {
    title: "Weather Dashboard",
    image: "http://openweathermap.org/img/wn/10d@2x.png",
    deployedLink: "https://gregstead.github.io/06_weather_dashboard/",
    githubLink: "https://github.com/gregstead/06_weather_dashboard",
    description: `A simple weather dashboard built with Materialize and OpenWeatherMap APIs`,
  },

  {
    title: "Employee Tracker",
    image: "./assets/images/logo.svg",
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
      <section id="projectsEl" class="container projects-container">
        <div>${projectCards}</div>
      </section>
    `;
    return view;
  },
  after_render: async () => {},
};
export default Projects;
