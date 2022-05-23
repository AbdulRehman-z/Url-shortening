import resultView from "./resultView";
import { state } from "../modal";
import localStorageView from "./localStorageView";
class copyToClipboard {
  onClickCopybefore(handler) {
    resultView._btn.addEventListener("click", function (e) {
      handler(e);
    });
  }

  onClickCopyload(handler) {
    state.btnArr.forEach((btn) =>
      btn.addEventListener("click", function (e) {
        handler(e);
      })
    );
  }

  copy(e) {
    console.log(e.target);
    const clickedEl = e.target;
    if (!clickedEl) return;
    clickedEl.textContent = "Copied!";
    state.btnArr.push(clickedEl);

    clickedEl.style.backgroundColor = "hsl(257, 27%, 26%)";
    const parentEl = clickedEl.parentElement;
    const link = parentEl.firstElementChild.getAttribute("href");
    navigator.clipboard.writeText(link);
  }
}
export default new copyToClipboard();
