document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  const navbarToggler = document.querySelector(".navbar-toggler");
  const navbarCollapse = document.getElementById("navbarNav");

  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      if (navbarCollapse.classList.contains("show")) {
        bootstrap.Collapse.getInstance(navbarCollapse).hide();
      }
    });
  });
});
