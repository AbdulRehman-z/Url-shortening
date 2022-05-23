import { state } from "../modal";

class searchView {
  _inputEl = document.querySelector(".search__input");
  _searchBtn = document.querySelector(".search__button-3");
  _container = document.querySelector(".search__error-box");

  getQuery() {
    const query = this._inputEl.value;
    return query;
  }

  showUrlMsg() {
    const markup = `<p class="search__message">Please add a link</ps>`;

    this._inputEl.style.border = "2px solid hsl(0, 87%, 67%)";

    this._container.insertAdjacentHTML("afterbegin", markup);
    state.msgArr.push(markup);

    if (state.msgArr.length > 1) {
      this._container.removeChild(this._container.firstChild);
    }
  }

  removeUrlMsg() {
    this._inputEl.style.border = "none";

    this._container.removeChild(this._container.firstChild);
  }

  searchResultHandler(handler) {
    this._searchBtn.addEventListener("click", handler);
  }
}

export default new searchView();
