// Link CSS module
const styleSrc = "./views/pages/Resume/style.css";
document.head.innerHTML += `<link type="text/css" rel="stylesheet" href="${styleSrc}"> `;

let Resume = {
  render: async () => {
    let view = `
      <section class="section">
      <div id="resEl" class="container res-container">
        <section class="res-section">
          <h4 class="res-heading">Technical Skills</h4>
          <p class="res-text">JavaScript, HTML, CSS, Bootstrap,  React.js, Node.js, Express.js, MySQL, MongoDb, Python, Git, Heroku,</p>
        </section>
        <section class="res-section">
          <h4 class="res-heading">Recent Work Experience</h4>
          <div class="res-item">
            <p class="res-text">Amusement Connect | Kansas City, Missouri</p>
            <p class="res-text">Applications Engineer 03/2021–present</p>
            <p class="res-text">Arcade Technical Support Representative 02/2020–03/2021</p>
            <p class="res-text">Provided tier 1 help desk support to clients, assembled and tested OEM computer
              kiosks, flashed and tested electrical components. Improved the training for future employees by documenting workflows and writing training manuals. Recognized by management for high performance with promotions.  </p>
          </div>
          <div class="res-item">
            <p class="res-text">VIPKid | Remote position</p>
            <p class="res-text">English tutor 05/2019–02/2020</p>
            <p class="res-text">Taught remote ESOL lessons to students in China, ages 6-10</p>
          </div>
          <div class="res-item">
            <p class="res-text">Donnelly College | Kansas City, Kansas</p>
            <p class="res-text">Adjunct professor 08/2019–12/2019</p>
            <p class="res-text">Guided students to a greater appreciation of music by introducing them to fundamental musical analysis techniques and presenting recordings in lectures, emphasizing cultural and historical contexts.</p>
          </div>
          <div class="res-item">
            <p class="res-text">The Friends of Chamber Music, Kansas City | Kansas City, Missouri</p>
            <p class="res-text">Box Office and Concert Production Manager 01/2017–05/2019</p>
            <p class="res-text">Reported directly to the founder, artistic director and CEO, was responsible for all concert production and venue readiness, planned and executed a ~$500k budget. In addition, assisted in artistic planning, edited marketing copy, and project managed the annual program book</p>
          </div>
        </section>
        <section class="res-section">
          <h4 class="res-heading">Education</h4>
          <div class="res-item">
            <p class="res-text">Full-Stack Flex Coding Boot Camp Certificate 03/2021</p>
            <p class="res-text">University of Kansas Lifelong & Professional Education; Overland Park, Kansas</p>
          </div>
          <div class="res-item">
            <p class="res-text">Master of Music 05/2014</p>
            <p class="res-text">Lynn University; Boca Raton, Florida</p>
          </div>
          <div class="res-item">
            <p class="res-text">Bachelor of Arts in Music, cum laude 05/2011</p>
            <p class="res-text">Florida State University; Tallahassee, Florida</p>
          </div>
        </section>
    </div>
      
      </section>
    `;
    return view;
  },
  after_render: async () => {},
};

export default Resume;
