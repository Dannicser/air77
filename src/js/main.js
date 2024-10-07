import { Slider } from "./slider.js";
import { ModalWindow } from "./window.js";

const slider = new Slider("main_section", "slides", "pagination_circles");
const modalWindow = new ModalWindow("menu", "burger");

slider.init();
modalWindow.init();
