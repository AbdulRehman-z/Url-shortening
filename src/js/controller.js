import View from "../js/View/View";
import sliderView from "../js/View/sliderView";
import * as modal from "./modal";
import searchView from "../js/View/searchView";
import resultView from "../js/View/resultView";
import scrollIntoView from "../js/View/scrollIntoView";
import secObserverView from "../js/View/secObserverView";
import copyToClipboardView from "../js/View/copyToClipboardView";
import localStorageView from "./View/localStorageView";
//// this function is called into apiCall Controller()
const copyLinkController = function (e) {
  resultView.updateBtnText(modal.state.btnArr);
  copyToClipboardView.copy(e);
};

window.addEventListener("load", function () {
  copyToClipboardView.onClickCopyload(copyLinkController);
});
/////////////////////////////////////////
/////////////ASYNC OPERATIONS

const apiCallController = async function (query) {
  try {
    await modal.apiCall(query);

    resultView.renderMarkup(modal.state.apiDataObj);

    copyToClipboardView.onClickCopybefore(copyLinkController);
  } catch (err) {
    View.renderErroMsg(err);
  }
};

const removeUrlMsgController = async function (query) {
  try {
    searchView.removeUrlMsg();
    modal.state.msgArr.splice(-1, 1);
    apiCallController(query);
  } catch (err) {
    throw err;
  }
};

const searchController = async function () {
  try {
    const query = searchView.getQuery();
    if (!query) {
      searchView.showUrlMsg();
    } else {
      modal.state.msgArr.length === 1
        ? removeUrlMsgController(query)
        : apiCallController(query);
    }
  } catch (err) {
    alert(err);
  }
};

/////////////////////////////////////////
/////////////DOM CONTROLLER

const sliderInitController = function () {
  sliderView.createDots();
  sliderView.goToSlide(0);
  sliderView.activateDot(0);
};

const rightSliderController = function () {
  modal.nextSlide();
};

const leftSliderController = function () {
  modal.prevSlide();
};

const init = function () {
  secObserverView.sectionObserver();
  scrollIntoView.scrollToSection();
  scrollIntoView.scrollToShorten();
  sliderInitController();
  sliderView.activateRightSlider(rightSliderController);
  sliderView.activateLeftSlider(leftSliderController);
  searchView.searchResultHandler(searchController);
};
init();
