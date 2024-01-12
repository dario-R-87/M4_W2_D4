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
	all.innerHTML += `
      <div class="col-6 col-md-4 col-lg-3">
     <div class="card mt-4 ">
        <div class="ratio ratio-16x9"><img src=${item.img} class="card-img-top mt-2" alt="image" /></div>
        <div class="card-body">
         <h5 class="card-title text-truncate">${item.title}</h5>
        </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">${item.price} <button class="" onclick="addCart(event,'${item.asin}')">Add Cart</button></li>
       </ul>
      </div>
    </div>
    `;
    });
  }).catch((error)=> console.error(error));

const cartElement = document.querySelector("#cart");
cartElement.addEventListener("click",showCart);