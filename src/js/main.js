import { Slider } from "./slider.js";
import { ModalBurgerWindow } from "./burgerWindow.js";
import { ModalVideoWindow } from "./modalVideoWindow.js";

const slider = new Slider("main_section", "slides", "pagination_circles");
const modalBurgerWindow = new ModalBurgerWindow("menu", "burger");
const modalVideoWindow = new ModalVideoWindow("video", "modal");

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
modalBurgerWindow.init();
modalVideoWindow.init();
