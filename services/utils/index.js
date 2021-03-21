const Utils = {
  //  Parse a url and break it into resource, id and verb
  parseRequestURL: () => {
    let url = location.hash.slice(1).toLowerCase() || "/";
    let r = url.split("/");
    let request = {
      resource: null,
      id: null,
      verb: null,
    };
    request.resource = r[1];
    request.id = r[2];
    request.verb = r[3];

    return request;
  },

  //  Simple sleep implementation
  sleep: (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  },
};

export default Utils;

  // // Get the parsed URl from the addressbar
  // let request = Utils.parseRequestURL();

  // // Parse the URL and if it has an id part, change it with the string ":id"
  // let parsedURL =
  //   (request.resource ? "/" + request.resource : "/") +
  //   (request.id ? "/:id" : "") +
  //   (request.verb ? "/" + request.verb : "");

  // // Get the page from our hash of supported routes.
  // // If the parsed URL is not in our list of supported routes, select the 404 page instead
  // let page = routes[parsedURL] ? routes[parsedURL] : Error404;
  // content.innerHTML = await page.render();
  // await page.after_render();
};
