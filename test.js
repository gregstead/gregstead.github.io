$(document).ready(function () {
  // Cache the DOM
  const homeEl = $("#homeEl");
  const aboutEl = $("#aboutEl");
  const projectsEl = $("#projectsEl");
  const resumeEl = $("#resumeEl");
  const contactEl = $("#contactEl");

  const elArr = [homeEl, aboutEl, projectsEl, resumeEl, contactEl];

  document.addEventListener("click", (event) => {
    event.preventDefault();

    // Prevent page from redirecting
    if (event.target.matches(".fa-linkedin-in")) {
      openLinkedIn();
    }

    //switch someFuntion(event.target)
    //
    switch ($(event.target).attr("id")) {
      case "fa-twitter":
        openTwitter();
        break;
      case "fa-github":
        openGitHub();
        break;
      case "kcsymph":
      case "miso":
      case "AmCo":
      case "sso":
        openNewTab(event.target);
        break;
      case "fa-linkedin-in":
        openLinkedIn();
        break;
      case "fa-linkedin-in":
        openLinkedIn();
        break;
      case "fa-linkedin-in":
        openLinkedIn();
        break;
      case "fa-linkedin-in":
        openLinkedIn();
        break;
      case "AboutBurgerlink":
      case "ProjectsBurgerlink":
      case "ResumeBurgerlink":
      case "ContactBurgerlink":
        elReset(elArr);
        showElement(event.target);
        break;

      default:
        break;
    }

    console.log("event.target: ", event.target);
  });

  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function () {
    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });
});

function elReset(elArr) {
  elArr.forEach((element) => element.attr("class", "is-hidden"));
}

function showElement(eventTarget) {
  // get which thing it is
  const elName = `#` + $(eventTarget).text().toLowerCase().trim() + `El`;
  $(elName).attr("class", "");
}

function openNewTab(eventTarget) {
  window.open($(eventTarget).attr("href"));
}

function openLinkedIn() {
  window.open("https://linkedin.com/in/gregstead/");
}

function openGitHub() {
  window.open("https://github.com/gregstead");
}

function openTwitter() {
  window.open("https://twitter.com/soylentgreg");
}
