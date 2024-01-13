export const getCard = (book) => {
  return `
	<div class="col-6 col-md-4 col-lg-3">
     <div class="card mt-4">
        <div class="ratio ratio-16x9"><img src=${book.img} class="card-img-top" alt="image" /></div>
        <div class="card-body">
         <h5 class="card-title">${book.title}</h5>
        </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item d-flex justify-content-between">$ ${book.price}
         <button id="add" class="" onclick="addCart(event,'${book.asin}')">Add</button>
         <button id="rem" class="d-none" onclick="removeCart(event,'${book.asin}')">Remove</button>
         </li>
       </ul>
      </div>
    </div>
`;
};
