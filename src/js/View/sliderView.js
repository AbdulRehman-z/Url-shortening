class sliderView {
  _slides = document.querySelectorAll(".slide");
  _btnLeft = document.querySelector(".slider__btn--left");
  _btnRight = document.querySelector(".slider__btn--right");
  _dotsContainer = document.querySelector(".dots");
  maxSlides = this._slides.length;

  activateRightSlider(handler) {
    this._btnRight.addEventListener("click", handler);
  }

  activateLeftSlider(handler) {
    this._btnLeft.addEventListener("click", handler);
  }

  createDots() {
    this._slides.forEach((_, i) => {
      this._dotsContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  }

  goToSlide(slide) {
    this._slides.forEach((s, i) => {
      s.style.transform = `translateX(${100 * (i - slide)}%)`;
    });
  }

  activateDot(slide) {
    document
      .querySelectorAll(".dots__dot")
      .forEach((dot, i) => dot.classList.remove("dots__dot--active"));

    document
      .querySelector(`.dots__dot[data-slide='${slide}']`)
      .classList.add("dots__dot--active");
  }
}

export default new sliderView();
