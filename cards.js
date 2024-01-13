export const getCard = (book) => {
  return `
	<div class="col-6 col-md-4 col-lg-3">
     <div class="card mt-4">
        <div class="ratio ratio-16x9"><img src=${book.img} class="card-img-top" alt="image" /></div>
        <div class="card-body">
         <h5 class="card-title text-truncate">${book.title}</h5>
        </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">${book.price} <button class="" onclick="addCart(event,'${book.asin}')">Add to Cart</button></li>
       </ul>
      </div>
    </div>
`;
};
