// Link CSS module
const styleSrc = "./views/components/Footer/style.css";
document.head.innerHTML += `<link type="text/css" rel="stylesheet" href="${styleSrc}"> `;

let Footer = {
  render: async () => {
    let view = `
      <footer>
        <div></div>
      </footer>
    `;
    return view;
  },
  after_render: async () => {},
};

export default Footer;
