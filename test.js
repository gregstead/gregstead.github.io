$(document).ready(function () {
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  const homeEl = document.getElementById("homeEl");
  const aboutEl = document.getElementById("aboutEl");
  const projectsEl = document.getElementById("projectsEl");
  const resumeEl = document.getElementById("resumeEl");
  const contactEl = document.getElementById("contactEl");

  document.addEventListener("click", (event) => {
    // Prevent page from redirecting
    event.preventDefault();

    if (event.target.matches(".burger") || event.target.matches(".line")) {
      burgerAnimation();
    }

    if (event.target.matches("#homeLi")) {
      renderHomeEl();
    }

    if (event.target.matches("#aboutLi")) {
      renderAboutEl();
      burgerAnimation();
    }

    if (event.target.matches("#projectsLi")) {
      renderProjectsEl();
      burgerAnimation();
    }

    if (event.target.matches("#resumeLi")) {
      renderResumeEl();
      burgerAnimation();
    }

    if (event.target.matches("#contactLi")) {
      renderContactEl();
      burgerAnimation();
    }

    if (event.target.matches(".fa-linkedin-in")) {
      openLinkedIn();
    }

    if (event.target.matches(".fa-twitter")) {
      openTwitter();
    }

    if (event.target.matches(".fa-github")) {
      openGitHub();
    }

    if (event.target.matches(".project-img")) {
      projectLink(event.target);
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
