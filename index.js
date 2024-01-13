import { getBooks } from "./books.js";
import { showCart } from "./cart.js";
import { searchBook } from "./books.js";

const url = "https://striveschool-api.herokuapp.com/books";

getBooks(url);

const cartElement = document.querySelector("#cart");
cartElement.addEventListener("click", showCart);

const search = document.querySelector("#search");
search.addEventListener("keyup", () => {
  if (search.value.length > 3) searchBook(search.value);
  if (search.value.length === 0) searchBook("");
});
