class ModalBurgerWindow {
  TABLET_RESOLUTION = 768;

  constructor(menuId, burgerId) {
    this.burger = document.getElementById(burgerId);
    this.menu = document.getElementById(menuId);
  }

  init() {
    if (window.innerWidth <= this.TABLET_RESOLUTION) {
      this.burger.addEventListener("click", () => this.open());
      this.menu.addEventListener("click", () => this.close());
      Array.from(this.menu.children).forEach((el) => el.addEventListener("click", (event) => event.stopPropagation()));
    } else {
      console.warn("Burger modal window has not been initialized");
    }
  }

  open() {
    document.body.style.overflow = "hidden";
    this.menu.classList.remove("hidden");
    this.menu.classList.add("opened");
  }

  close() {
    document.body.style.overflow = "visible";
    this.menu.classList.add("closing");

    setTimeout(() => {
      this.menu.classList.add("hidden");
      this.menu.classList.remove(...["opened", "closing"]);
    }, 500);
  }
}

export { ModalBurgerWindow };
