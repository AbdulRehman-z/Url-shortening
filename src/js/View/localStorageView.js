import { state } from "../modal";
import copyToClipboardView from "./copyToClipboardView";
import { copyLinkController } from "../controller";
class localStorageView {
  _parentEl = document.querySelector(".result-box");
  _btn;
  renderLocalStorage(arr) {
    arr.forEach((data) => {
      const markUp = this._generateMarkup(data);

      this._parentEl.insertAdjacentHTML("afterbegin", markUp);

      this._resultCol = document.querySelector(".result-box__col");
      this._btn = document.querySelector(".result-box__button-3");

      state.btnArr.push(this._btn);
    });
  }

  _generateMarkup(data) {
    return `
    <div class="result-box__col animate">
          <span class="result-box__original-link">
            ${data.result.original_link}</span
          >
        <div class="result-box__right-content">
            <a href="${data.result.short_link2}" class="result-box__shorten-link">${data.result.short_link2}</a>
            <button class="result-box__button-3" role="button">Copy</button>
        </div>
    </div>
    `;
  }

  updateBtnText(btnArr) {
    console.log(btnArr);
    const filteredEl = btnArr
      .filter((el) => el.textContent === "Copied!")
      .map((el) => {
        console.log(el.textContent);
        el.textContent = "Copy";
        el.style.backgroundColor = "hsl(180, 66%, 49%)";
      });
    return filteredEl;
  }
}

export default new localStorageView();
