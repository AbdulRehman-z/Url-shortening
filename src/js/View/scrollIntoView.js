class scrollIntoView {
  _navContainer = document.querySelector(".nav");

  scrollToSection() {
    this._navContainer.addEventListener("click", function (e) {
      e.preventDefault();

      if (
        e.target.classList.contains("nav__link") ||
        e.target.classList.contains("cta-btn")
      ) {
        const id = e.target.getAttribute("href");
        document.querySelector(`${id}`).scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  scrollToShorten() {
    document
      .querySelector(".left-content")
      .addEventListener("click", function (e) {
        e.preventDefault();
        if (e.target.classList.contains("btn--header")) {
          const id = e.target.getAttribute("href");
          document
            .querySelector(`${id}`)
            .scrollIntoView({ behavior: "smooth" });
        }
      });
  }
}

export default new scrollIntoView();
