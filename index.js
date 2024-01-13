import { getBooks } from "./books.js";
import { showCart } from "./cart.js";

const url = "https://striveschool-api.herokuapp.com/books";

getBooks(url);

const cartElement = document.querySelector("#cart");
cartElement.addEventListener("click", showCart);
