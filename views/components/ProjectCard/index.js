// Link CSS module
const styleSrc = "./views/components/ProjectCard/style.css";
document.head.innerHTML += `<link type="text/css" rel="stylesheet" href="${styleSrc}"> `;

// {
//     title: String,
//     image: String, // path to image
//     deployedLink: URL,
//     githubLink: URL,
//     description: String
// }
function ProjectCard(projectObject) {
  return ` 
  <div class="column is-one-third">
    <div class="card">
      <div class="project-card-image-container">
        <figure>
          <img class="project-card-image" src="${projectObject.image}" />
        </figure>
      </div>
      <div class="project-card-content">
        <div>
          <div>
            <h2>${projectObject.title}</h2>
            <h3>
              <a href="${projectObject.deployedLink}" target="_blank" rel="noopener noreferrer">deployed app </a>
              <span class="skinny">||</span>
              <a href="${projectObject.githubLink}" target="_blank" rel="noopener noreferrer">GitHub repo</a>
            </h3>
          </div>
        </div>
        <div>${projectObject.description}</div>
      </div>
    </div>
    <hr>
  </div>`;
}

export default ProjectCard;
