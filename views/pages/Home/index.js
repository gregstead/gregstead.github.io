// Link CSS module
const styleSrc = "./views/pages/Home/style.css";
document.head.innerHTML += `<link type="text/css" rel="stylesheet" href="${styleSrc}"> `;

const Home = {
  render: async () => {
    const view = `
      <section class="section">
        <div class="home-circ" onClick="homeElClickHandler(this)"></div>
        <div class="home-circ-inner"></div>
      </section>
    `;
    return view;
  },
  after_render: async () => {},
};

export default Home;
