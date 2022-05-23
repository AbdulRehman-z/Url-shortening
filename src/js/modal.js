import sliderView from "../js/View/sliderView";
import localStorageView from "./View/localStorageView";
import copyToClipboardView from "./View/copyToClipboardView";
import { getJson } from "./helper";
import { API_URL } from "./config";
export const state = {
  btnArr: [],
  msgArr: [],
  apiDataObj: {},
  resultArrCount: [],
};

///////////////////////////////////////
/////// LOCAL STORAGE

const setLocalStorageItem = function () {
  return localStorage.setItem(
    "resultsCol",
    JSON.stringify(state.resultArrCount)
  );
};

const getLocalStorageItem = function () {
  const resultsCol = JSON.stringify(resultsCol);
  console.log(resultsCol);
};

window.addEventListener("load", function () {
  const resultsCol = this.localStorage.getItem("resultsCol");
  if (resultsCol) state.resultArrCount = JSON.parse(resultsCol);
  localStorageView.renderLocalStorage(state.resultArrCount);
  console.log(state.btnArr);
});

///////////////////////////////////////
/////// SLIDER

export const nextSlide = function () {
  if (state.currSlide === sliderView.maxSlides - 1) {
    state.currSlide = 0;
  } else {
    state.currSlide++;
  }
  sliderView.goToSlide(state.currSlide);
  sliderView.activateDot(state.currSlide);
};

export const prevSlide = function () {
  if (state.currSlide === 0) {
    state.currSlide = sliderView.maxSlides - 1;
  } else {
    state.currSlide--;
  }

  sliderView.goToSlide(state.currSlide);
  sliderView.activateDot(state.currSlide);
};

const createApiDataObj = function (data) {
  return {
    originalLink: data.result.original_link,
    shortenLink: data.result.short_link2,
  };
};

export const apiCall = async function (query) {
  const data = await getJson(`${API_URL}${query}`);

  state.resultArrCount.push(data);
  setLocalStorageItem();
  state.apiDataObj = createApiDataObj(data);
};
