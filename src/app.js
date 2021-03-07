import About from "./views/pages/About";
import Home from "./views/pages/Home";
import Error404 from "./views/pages/Error404";

import Utils from "./services/utils";
// supported routes
// any other route will throw a 404 error
const routes = {
  "/": Home,
  "/about": About,
};

// Takes a URL, checks against the supported routes, then renders corresponding page
async function router() {
  // Lazy load view elements
  const content = null || document.getElementById("page_container");

  // Get the parse URI from the addressbar
  let request = Utils.parseRequestURL();

  // Parse the URL and if it has an id part, change it with the string ":id"
  let parsedURL =
    (request.resource ? "/" + request.resource : "/") +
    (request.id ? "/:id" : "") +
    (request.verb ? "/" + request.verb : "");

  // Get the page from our hash of supported routes
  // If the parsed URL is not in our list of supported routes, select the 404 page instead
  let page = routes[parsedURL] ? routes[parsedURL] : Error404;
  content.innerHtml = await page.render();
  await page.after_render();
}

// LIsten on hash change
window.addEventListener("hashchange", router);

// Listen on page load
window.addEventListener("load", router);
