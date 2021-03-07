const Error404 = {
  render: () => {
    const view = `
      <section class="section">
        <h1>404 Error</h1>
      </section>
    `;
    return view;
  },
  after_render: async () => {},
};
export default Error404;
