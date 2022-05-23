import { TIMEOUT_SEC } from "./config";
export const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(
        new Error(
          `Slow network detected 🐌. Request took too long! Timeout after ${sec} seconds`
        )
      );
    }, sec * 1000);
  });
};

export const getJson = async function (url) {
  try {
    const fetchPro = fetch(url);
    const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
    const data = await res.json();
    // console.log(data);
    if (!res.ok)
      throw new Error(`${data.error}----------Status_code:${data.error_code}`);
    return data;
  } catch (err) {
    throw err;
  }
};
