import { getCard } from "./cards.js";

export const books = [];

export const getBooks = (url) => {
  const all = document.querySelector("#all");

  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((items) => {
      items.forEach((item) => {
        all.innerHTML += getCard(item);
        books.push({ ...item, selected: false });
      });
      console.log(books);
    })
    .catch((error) => console.error(error));
};

export const searchBook = (str) => {
  console.log(str);
  const finded = books.filter((book) => {
    return book.title.toLowerCase().indexOf(str.trim().toLowerCase()) !== -1;
  });
  all.innerHTML = "";
  console.log(finded);
  finded.forEach((item) => {
    all.innerHTML += getCard(item);
  });
};

const close = document.querySelector("#close");
close.addEventListener("click", () => {
  all.innerHTML = "";
  books.forEach((book) => {
    all.innerHTML += getCard(book);
  });
});
