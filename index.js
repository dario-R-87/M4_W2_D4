import {getBooks} from './book.js';

const url = "https://striveschool-api.herokuapp.com/books";
const all = document.querySelector("#all");
const books = [];
const cart = [];

const addCart = (event,id) => {
console.log(id);
	const book = books.find(item => item.asin === id);
	cart.push(book);
	console.log(cart.length);
}

const showCart = () => {
	console.log(cart);
}

fetch(url)
  .then((res) => {
    return res.json();
  })
  .then((items) => {
console.log(items);
    items.forEach((item) => {
	books.push(item);
	all.innerHTML += getBooks(item);
    });
  }).catch((error)=> console.error(error));

const cartElement = document.querySelector("#cart");
cartElement.addEventListener("click",showCart);