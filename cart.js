import { books } from "./books.js";
import { getCard } from "./cards.js";

let cart = [];

export const showCart = () => {
  document.querySelector(
    "#exampleModalLabel"
  ).innerHTML = `Carrello (${cart.length})`;
  const body = document.querySelector(".modal-body");
  body.innerHTML = `<ul>`;
  cart.forEach((item) => {
    body.innerHTML += `<li>${item.title}</li>`;
  });
  body.innerHTML += `</ul>`;
  const totalAmount = cart.reduce((acc, item) => acc + item.price, 0);
  const tot = document.querySelector("#tot");
  tot.innerHTML = "Total Amount: $ " + totalAmount.toFixed(2);
};

export const empty = () => {
  cart = [];
  books.forEach((book) => {
    book.selected = false;
  });
  showCart();
  console.log(books);
};

window.addCart = (event, id) => {
  console.log(id);
  console.log(event.target);
  const indexCart = cart.findIndex((item) => item.asin === id);
  if (indexCart === -1) {
    const book = books.find((item) => item.asin === id);
    const index = books.findIndex((item) => item.asin === book.asin);
    books[index].selected = true;
    cart.push(book);
    console.log(cart.length);
    const add = event.target;
    add.classList.add("d-none");
    const rem = add.nextElementSibling;
    rem.classList.remove("d-none");
    const skip = add.previousElementSibling;
    skip.classList.add("d-none");
  }
  let listItem = event.target.closest(".list-group-item");
  let listGroup = listItem.parentNode;
  let cardDiv = listGroup.parentNode;
  cardDiv.classList.add("added");
  console.log(books);
};

window.removeCart = (event, id) => {
  if (cart.findIndex((item) => item.asin === id >= 0)) {
    //const book = books.find((item) => item.asin === id);
    cart = cart.filter((book) => book.asin !== id);
    console.log(cart.length);
    const index = books.findIndex((item) => item.asin === id);
    books[index].selected = false;
    const rem = event.target;
    rem.classList.add("d-none");
    const add = rem.previousElementSibling;
    add.classList.remove("d-none");
    const skip = add.previousElementSibling;
    skip.classList.remove("d-none");
  }
  //let listItem = event.target.closest(".list-group-item");
  let listItem = event.target.parentNode;
  let listGroup = listItem.parentNode;
  let cardDiv = listGroup.parentNode;
  cardDiv.classList.remove("added");
};
