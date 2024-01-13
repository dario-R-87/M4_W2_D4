import { getCard } from "./cards.js";

export const books = [];

export const getBooks = (url) => {
  const all = document.querySelector("#all");

  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((items) => {
      console.log(items);
      items.forEach((item) => {
        all.innerHTML += getCard(item);
        books.push(item);
      });
    })
    .catch((error) => console.error(error));
};
