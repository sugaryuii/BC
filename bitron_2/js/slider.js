document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  const links = document.querySelectorAll(".nav-links a");

  hamburger.addEventListener("click", function () {
    this.classList.toggle("active");
    navLinks.classList.toggle("active");
  });

  links.forEach((link) => {
    link.addEventListener("click", function () {
      hamburger.classList.remove("active");
      navLinks.classList.remove("active");
    });
  });

  window.addEventListener("scroll", function () {
    if (hamburger.classList.contains("active")) {
      hamburger.classList.remove("active");
      navLinks.classList.remove("active");
    }
  });

  const servicesSwiper = new Swiper(".services-swiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,

    breakpoints: {
      576: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },

    navigation: {
      nextEl: ".services-swiper .swiper-button-next",
      prevEl: ".services-swiper .swiper-button-prev",
    },

    touchEventsTarget: "container",
    touchRatio: 1,
    touchAngle: 45,
    grabCursor: true,

    observer: true,
    observeParents: true,
    preloadImages: false,
    lazy: true,
  });

  const processSwiper = new Swiper(".process-swiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,

    breakpoints: {
      768: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
    },

    navigation: {
      nextEl: ".process-swiper .swiper-button-next",
      prevEl: ".process-swiper .swiper-button-prev",
    },

    touchEventsTarget: "container",
    touchRatio: 1,
    touchAngle: 45,
    grabCursor: true,

    observer: true,
    observeParents: true,
    preloadImages: false,
    lazy: true,
  });
});
