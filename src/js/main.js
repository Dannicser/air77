class Slider {
  slides = [
    {
      path: "./assets/imgs/main/headphones.jpg",
      title: "AirPods Pro 2",
      descr: "Абсолютно новые. Лучшие.",
      price: "5.490₽",
    },
    {
      path: "./assets/imgs/main/headphones.jpg",
      title: "AirPods Pro 1",
      descr: "Абсолютно старые.",
      price: "1.490₽",
    },
  ];

  currentSliderIndex = 0;

  constructor(imgId, titleId, descrId, priceId) {
    this.img = document.getElementById(imgId);
    this.title = document.getElementById(titleId);
    this.descr = document.getElementById(descrId);
    this.price = document.getElementById(priceId);
  }

  initSlider() {
    this.img.src = this.slides[this.currentSliderIndex].path;
    this.title.innerHTML = this.slides[this.currentSliderIndex].title;
    this.descr.innerHTML = this.slides[this.currentSliderIndex].descr;
    this.price.innerHTML = this.slides[this.currentSliderIndex].price;
  }

  up() {
    if (this.currentSliderIndex < this.slides.length) {
      this.currentSliderIndex++;
    } else {
      this.currentSliderIndex = 0;
    }
  }

  down() {
    if (this.currentSliderIndex > 0) {
      this.currentSliderIndex--;
    } else {
      this.currentSliderIndex = this.slides.length - 1;
    }
  }
}

const slider = new Slider("img_slider", "title_slider", "descr_slider", "price_slider");

slider.initSlider();
