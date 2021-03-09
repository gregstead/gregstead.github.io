function ready(fn) {
  if (document.readyState != "loading") {
    fn();
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}

ready(() => {
  document.addEventListener("click", (e) => {
    console.log(e.target);
  });
});
