const books = [];
const cart = [];



export const getBooks = (item) => {
  books.push(item);
 return `
	<div class="col-6 col-md-4 col-lg-3">
     <div class="card mt-4 ">
        <div class="ratio ratio-16x9"><img src=${item.img} class="card-img-top" alt="image" /></div>
        <div class="card-body">
         <h5 class="card-title text-truncate">${item.title}</h5>
        </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">${item.price} <button class="" onclick="addCart('${item.asin}')">Add Cart</button></li>
       </ul>
      </div>
    </div>
`;
}

export const showCart = () => {
	console.log(cart);
}
 const addCart = (id) => {
  console.log(id);
    const book = books.find(item => item.asin === id);
    cart.push(book);
    console.log(cart.length);
  }