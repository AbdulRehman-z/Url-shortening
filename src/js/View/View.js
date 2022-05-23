class View {
  _parentEl = document.querySelector(".result-box");

  renderErroMsg(err) {
    const html = `<div class="result-box__col animate">
          <span class="result-box__error"
            >${err}</span
          >
          
        </div>`;

    this._parentEl.insertAdjacentHTML("afterbegin", html);
  }
}

export default new View();
