import CryptoJS from "crypto-js";

export const isPath = (data = "", exact = false) => {
  let pathname = window.location.pathname;
  if (!data) {
    return false;
  }
  if (exact) return pathname == data;
  else return pathname.indexOf(data) > -1 ? true : false;
};

const emptyFunc = () => {};

export const Console =
  import.meta.env.MODE == "production"
    ? { warn: emptyFunc, log: emptyFunc, error: emptyFunc }
    : console;

export const getBaseUrl = () => {
  return "http://127.0.0.1:8000/api";
  // if (import.meta.env.MODE == "development") {
  //   return "http://127.0.0.1:8000/api";
  // }
};

export function setCookie(cname = "", cvalue = "", exdays = 1) {
  const d = new Date();
  cvalue = encryptData(cvalue);
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + `; path=/;`;
}

export function getCookie(cname = "", cookie = "") {
  let name = cname + "=";
  let tousecookie = cookie || document.cookie;
  let ca = tousecookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return decryptData(c.substring(name.length, c.length));
    }
  }
  return "";
}

// let lastCookie = document.cookie;
// export function listenCookieChange(callback:()=>{},keys = [], interval = 1000) {
//   setInterval(() => {
//     let cookie = document.cookie;
//     let haskeys = Array.isArray(keys) && keys.length > 0;
//     let returnobj = {};
//     if (cookie !== lastCookie) {
//       try {
//         if (haskeys) {
//           keys.forEach((key) => {
//             let olddata = getCookie(`${key}`, lastCookie || "coookie");
//             let currentdata = getCookie(`${key}`);
//             // console.warn("olddata", olddata);
//             // console.warn("newdata", currentdata);
//             if (olddata != currentdata) {
//               returnobj[`${key}`] = { old: olddata, new: currentdata };
//             }
//           });
//         }
//         if (haskeys && !isEmpty(returnobj)) {
//           callback(returnobj);
//         }
//         if (!haskeys) callback({ oldValue: lastCookie, newValue: cookie });
//       } finally {
//         console.warn("here");
//         lastCookie = cookie;
//       }
//     }
//   }, interval);
// }
//function to determine if data has valid values
export function checkData(data: any) {
  if ((data != null && data != undefined && data != "") || data == "0") {
    return true;
  }
  return false;
}

export const isEmpty = (data: any) => {
  if (!checkData(data)) return true;
  if (data.constructor == Array && data.length < 1) return true;
  else if (data.constructor == String && data.length < 1) return true;
  else if (data.constructor == Object && Object.keys(data).length == 0)
    return true;
  else return false;
};

export function deleteCookie(cname = "") {
  document.cookie = `${cname}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
}

export function currentTime() {
  let date = new Date();
  let hh: string | number = date.getHours();
  let mm: string | number = date.getMinutes();
  let ss: string | number = date.getSeconds();
  let session = "AM";

  if (hh === 0) {
    hh = 12;
  }
  if (hh > 12) {
    hh = hh - 12;
    session = "PM";
  }

  hh = hh < 10 ? "0" + hh : hh;
  mm = mm < 10 ? "0" + mm : mm;
  ss = ss < 10 ? "0" + ss : ss;

  return hh + ":" + mm + ":" + ss + " " + session;
}

export const encryptData = (data: string) => {
  const SECRET_KEY = "b92145d7-d967-44b4-93a5-8d057ca6a5e8";
  const encrypted = CryptoJS.AES.encrypt(data, SECRET_KEY).toString();
  return encrypted;
};

export const decryptData = (data: string) => {
  const SECRET_KEY = "b92145d7-d967-44b4-93a5-8d057ca6a5e8";
  const decrypted = CryptoJS.AES.decrypt(data, SECRET_KEY).toString(
    CryptoJS.enc.Utf8
  );
  // Console.warn(decrypted);
  return decrypted;
};
