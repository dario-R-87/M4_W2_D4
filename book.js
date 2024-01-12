export const getBooks = (item) => {
 return `
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
}