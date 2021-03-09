function ready(fn) {
  if (document.readyState != "loading") {
    fn();
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}

function burgerClickHandler(burger) {
  burger.classList.toggle("active");
  for (i = 0; i < 3; i++) {
    burger.children[i].classList.toggle("active");
  }
}

ready(async () => {
  document.addEventListener("click", (e) => {
    console.log(e.target);
  });
});
