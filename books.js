import { getCard } from "./cards.js";
import { addCart, removeCart } from "./cart.js";

export let books = [];

export const getBooks = async (url) => {
  const all = document.querySelector("#all");
  const loader = document.querySelector(".loader");
  all.classList.add("d-none");
  try {
    const res = await fetch(url);
    books = await res.json();

    books = books.map((book) => {
      all.innerHTML += getCard(book);
      return { ...book, selected: false, skipped: false };
    });
    addListener();
    setTimeout(function () {
      loader.classList.remove("loader");
      all.classList.remove("d-none");
    }, 2000);
  } catch (err) {
    console.error(err);
  }
};

export const searchBook = (str) => {
  const finded = books.filter((book) => {
    return book.title.toLowerCase().indexOf(str.trim().toLowerCase()) !== -1;
  });
  all.innerHTML = "";
  finded.forEach((item) => {
    if (!item.skipped) all.innerHTML += getCard(item);
  });
  addListener();
};

const skip = (event) => {
  const book_id = event.target.id.substring(3);
  const index = books.findIndex((item) => item.asin === book_id);
  books[index].skipped = true;
  let listItem = event.target.closest(".list-group-item");
  let listGroup = listItem.parentNode;
  let cardDiv = listGroup.parentNode;
  let cardWrapper = cardDiv.parentNode;
  cardWrapper.classList.add("d-none");
};

export const addListener = () => {
  const skipBtns = document.querySelectorAll(".skip");
  skipBtns.forEach((skipBtn) =>
    skipBtn.addEventListener("click", () => {
      skip(event);
    })
  );
  const addBtns = document.querySelectorAll(".add");
  addBtns.forEach((addBtn) =>
    addBtn.addEventListener("click", () => {
      addCart(event, addBtn.id.substring(3));
    })
  );
  const remBtns = document.querySelectorAll(".rem");
  remBtns.forEach((remBtn) =>
    remBtn.addEventListener("click", () => {
      removeCart(event, remBtn.id.substring(3));
    })
  );
};
