import { books } from "./books.js";

const cart = [];

export const showCart = () => {
  console.log(cart);
};

window.addCart = (event, id) => {
  console.log(id);
  const book = books.find((item) => item.asin === id);
  cart.push(book);
  console.log(cart.length);
  let listItem = event.target.closest(".list-group-item");
  let listGroup = listItem.parentNode;
  let cardDiv = listGroup.parentNode;
  cardDiv.classList.toggle("added");
};
