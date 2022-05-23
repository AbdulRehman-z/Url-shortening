class secObserverView {
  _allSections = document.querySelectorAll(".section");

  sectionObserver() {
    const revealElements = function (entries, observer) {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.remove("section--hidden");
        observer.unobserve(entry.target);
      });
    };
    const sectionsObserver = new IntersectionObserver(revealElements, {
      root: null,
      threshold: 0.15,
    });
    this._allSections.forEach((sec) => {
      sec.classList.add("section--hidden");
      sectionsObserver.observe(sec);
    });
  }
}

export default new secObserverView();
