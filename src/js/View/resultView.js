import { state } from "../modal";

class resultView {
  _parentEl = document.querySelector(".result-box");
  _btn;
  _resultCol;
  renderMarkup(data) {
    const markup = this._generateMarkup(data);
    this._parentEl.insertAdjacentHTML("afterbegin", markup);
    this._btn = document.querySelector(".result-box__button-3");
    this._resultCol = document.querySelector(".result-box__col");

    // this array will be filtered in this.updateBtnText(btnArr)
    state.btnArr.push(this._btn);
  }

  updateBtnText(btnArr) {
    const filteredEl = btnArr
      .filter((el) => el.textContent === "Copied!")
      .map((el) => {
        console.log(el.textContent);
        el.textContent = "Copy";
        el.style.backgroundColor = "hsl(180, 66%, 49%)";
      });
    return filteredEl;
  }

  _generateMarkup(data) {
    return `
    <div class="result-box__col animate">
          <span class="result-box__original-link">
            ${data.originalLink}</span
          >
        <div class="result-box__right-content">
            <a href="${data.shortenLink}" class="result-box__shorten-link">${data.shortenLink}</a>
            <button class="result-box__button-3" role="button">Copy</button>
        </div>
    </div>
    `;
  }
}

export default new resultView();
