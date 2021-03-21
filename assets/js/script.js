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

ready(() => {});
