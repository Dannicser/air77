import { Slider } from "./slider.js";
import { ModalWindow } from "./window.js";

const slider = new Slider("main_section", "slides", "pagination_circles");
const modalWindow = new ModalWindow("menu", "burger");
const swiperFull = new Swiper(".swiper-full", {
  autoplay: {
    delay: 7000,
  },
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 32,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

slider.init();
modalWindow.init();
