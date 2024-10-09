class ModalVideoWindow {
  constructor(videoId, modalId) {
    this.video = document.getElementById(videoId);
    this.modal = document.getElementById(modalId);
  }

  init() {
    this.video.addEventListener("click", () => this.open());
    this.modal.addEventListener("click", () => this.close());
  }

  open() {
    this.modal.classList.remove("hidden");
  }

  close() {
    this.modal.classList.add("closing");

    setTimeout(() => {
      this.modal.classList.add("hidden");
      this.modal.classList.remove("closing");
    }, 500);
  }
}

export { ModalVideoWindow };
