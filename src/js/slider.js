class Slider {
  currentSlideIndex = 0;
  timerId = null;
  intervalMs = 7000;

  constructor(backgroundId, slidesId, paginationCirclesId) {
    this.background = document.getElementById(backgroundId);
    this.slides = document.getElementById(slidesId);
    this.paginationCircles = document.getElementById(paginationCirclesId);
  }

  init() {
    this.background.addEventListener("click", () => this.changeSlide());
    this.paginationCircles.addEventListener("click", (event) => event.stopPropagation());
    this.addPagination();
    this.setAutoPlay();
  }

  setAutoPlay() {
    this.timerId = setTimeout(this.changeSlide.bind(this), this.intervalMs);
  }

  stopAutoPlay() {
    clearTimeout(this.timerId);
  }

  changeSlide(index) {
    this.stopAutoPlay();
    this.hideSlide();
    this.removeActivePaginationClass();
    this.changeSlideIndex(index);
    this.showSlide();
    this.addActivePaginationClass();
    this.setAutoPlay();
  }

  changeSlideIndex(index) {
    if (index) {
      this.currentSlideIndex = index;
    } else if (this.currentSlideIndex < this.slides.children.length - 1) {
      this.currentSlideIndex++;
    } else {
      this.currentSlideIndex = 0;
    }
  }

  showSlide() {
    this.slides.children[this.currentSlideIndex].classList.add("show");
  }

  hideSlide() {
    this.slides.children[this.currentSlideIndex].classList.remove("show");
  }

  createPaginationCircle() {
    this.paginationCircles.appendChild(document.createElement("li"));
  }

  addPagination() {
    Array.from(this.slides.children).forEach(this.createPaginationCircle.bind(this));
    Array.from(this.paginationCircles.children).forEach((circle, index) => {
      circle.addEventListener("click", () => this.changeSlide(index));
    });

    this.paginationCircles.children[0].classList.add("active");
  }

  addActivePaginationClass() {
    this.paginationCircles.children[this.currentSlideIndex].classList.add("active");
  }

  removeActivePaginationClass() {
    this.paginationCircles.children[this.currentSlideIndex].classList.remove("active");
  }
}

export { Slider };
