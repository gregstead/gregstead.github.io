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
              <div class="card-image">
                <figure class="image is-4by3">
                  <img
                    src="./assets/images/${projectObject.image}"
                    alt="${projectObject.title} preview"
                  />
                </figure>
              </div>
              <div class="project-card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-4">${projectObject.title}</p>
                    <p class="subtitle is-6">
                      <a
                        href="${projectObject.deployedLink}"
                        >deployed app </a
                      >||
                      <a
                        href="${projectObject.githubLink}"
                        >GitHub repo</a
                      >
                    </p>
                  </div>
                </div>
                <div class="content">
                  ${projectObject.description}
                </div>
              </div>
            </div>
          </div>`;
}

export default ProjectCard;
