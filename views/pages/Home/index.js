// Link CSS module
const styleSrc = "./views/pages/Home/style.css";
document.head.innerHTML += `<link type="text/css" rel="stylesheet" href="${styleSrc}"> `;

let mousX = 0;

document.head.innerHTML += ` <style type="text/css">
  div.cube {
    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ${mousX}, 0, 1);
  }
  </style>`;

document.addEventListener("mousemove", (e) => {
  mousX = e.clientX;
});

const Home = {
  render: async () => {
    let aNumber = 0;
    document.addEventListener("mousemove", (e) => {
      aNumber = e.clientX;
    });
    const view = `
      <section class="section">
        <div class="cube"></div>
      </section>
    `;
    return view;
  },
  after_render: async () => {},
};

export default Home;
