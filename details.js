import { getDetails } from "./cards.js";

document.documentElement.style.setProperty("--bs-primary-rgb", "150,221,188");
document.documentElement.style.setProperty("--bs-bg-opacity", "0.8");
document.documentElement.style.setProperty(
  "--bs-link-color-rgb",
  "255,255,255"
);

const origin =
  window.location.origin +
  (window.location.protocol === "https:" ? "/M4_W2_D4" : "");
const home = document.querySelector("#home");

home.setAttribute("href", origin + "/index.html");

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const url = "https://striveschool-api.herokuapp.com/books/" + id;

const getBook = async (url) => {
  const book_details = document.querySelector("#book_details");

  try {
    const res = await fetch(url);
    const book = await res.json();
    console.log(book);
    book_details.innerHTML += getDetails(book);
  } catch (err) {
    console.error(err);
  }
};

getBook(url);
