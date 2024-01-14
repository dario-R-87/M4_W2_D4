import { getCard } from "./cards.js";

export let books = [];

export const getBooks = (url) => {
  const all = document.querySelector("#all");

  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((items) => {
      books = items.map((item) => {
        all.innerHTML += getCard(item);
        return { ...item, selected: false };
      });
    })
    .catch((error) => console.error(error));
};

export const searchBook = (str) => {
  const finded = books.filter((book) => {
    return book.title.toLowerCase().indexOf(str.trim().toLowerCase()) !== -1;
  });
  all.innerHTML = "";
  finded.forEach((item) => {
    all.innerHTML += getCard(item);
  });
};
