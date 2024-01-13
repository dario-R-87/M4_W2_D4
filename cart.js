import { books } from "./books.js";

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

window.addCart = (event, id) => {
  console.log(id);
  console.log(event.target);
  if (cart.findIndex((item) => item.asin === id) === -1) {
    const book = books.find((item) => item.asin === id);
    cart.push(book);
    console.log(cart.length);
    const add = event.target;
    add.classList.add("d-none");
    const rem = add.nextElementSibling;
    rem.classList.remove("d-none");
  }
  let listItem = event.target.closest(".list-group-item");
  let listGroup = listItem.parentNode;
  let cardDiv = listGroup.parentNode;
  cardDiv.classList.add("added");
};

window.removeCart = (event, id) => {
  if (cart.findIndex((item) => item.asin === id >= 0)) {
    //const book = books.find((item) => item.asin === id);
    cart = cart.filter((book) => book.asin !== id);
    console.log(cart.length);
    const rem = event.target;
    rem.classList.add("d-none");
    const add = rem.previousElementSibling;
    add.classList.remove("d-none");
  }
  //let listItem = event.target.closest(".list-group-item");
  let listItem = event.target.parentNode;
  let listGroup = listItem.parentNode;
  let cardDiv = listGroup.parentNode;
  cardDiv.classList.remove("added");
};
