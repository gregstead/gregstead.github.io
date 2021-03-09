function ready(fn) {
  if (document.readyState != "loading") {
    fn();
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}

function toggleClass(node, className) {
  node.classList.toggle(className);
}

function burgerClickHandler(burger) {
  // Menu selector
  const menu = burger.parentNode.querySelector(".nav-links");
  toggleClass(menu, "nav-active");

  // Menu links animation
  //animate links
  Object.values(menu.children).forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${
        index / 7 + 0.5
      }s`;
    }
  });

  // Toggle class of burger lines for animation
  const lines = burger.children;
  for (i = 0; i < lines.length; i++) {
    toggleClass(burger.children[i], "active");
  }
  // Toggle class of burger for animation
  toggleClass(burger, "active");
}

ready(async () => {
  document.addEventListener("click", (e) => {
    console.log(e.target);
  });
});
