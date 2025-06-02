document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  const navbarToggler = document.querySelector(".navbar-toggler");
  const navbarCollapse = document.getElementById("navbarNav");

  function setActiveMenuItem() {
    const hash = window.location.hash || "#hero";

    navLinks.forEach((link) => {
      link.classList.remove("active");
    });

    navLinks.forEach((link) => {
      if (link.getAttribute("href").includes(hash)) {
        link.classList.add("active");
      }
    });
  }

  setActiveMenuItem();

  window.addEventListener("hashchange", setActiveMenuItem);

  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      if (navbarCollapse.classList.contains("show")) {
        bootstrap.Collapse.getInstance(navbarCollapse).hide();
      }

      navLinks.forEach((l) => l.classList.remove("active"));

      this.classList.add("active");
    });
  });
});
