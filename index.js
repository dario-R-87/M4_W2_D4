import { getBooks } from "./books.js";
import { showCart, empty } from "./cart.js";
import { searchBook } from "./books.js";

document.documentElement.style.setProperty("--bs-primary-rgb", "150,221,188");
document.documentElement.style.setProperty("--bs-bg-opacity", "0.8");

const url = "https://striveschool-api.herokuapp.com/books";

getBooks(url);

const cartElement = document.querySelector("#cart");
cartElement.addEventListener("click", showCart);

const search = document.querySelector("#search");
search.addEventListener("keyup", () => {
  if (search.value.trim().length > 3) searchBook(search.value);
  if (search.value.trim().length < 4) searchBook("");
});

const emptyBtn = document.querySelector("#empty");
emptyBtn.addEventListener("click", empty);
