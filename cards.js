export const getCard = (book) => {
  return `
	<div class="col-6 col-md-4 col-lg-3">
     <div class="card mt-4 ${book.selected && "added"}">
        <div class="ratio ratio-16x9"><img src=${
          book.img
        } class="card-img-top" alt="image" /></div>
        <div class="card-body">
         <h5 class="card-title">${book.title}</h5>
        </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item d-flex justify-content-between fw-bold align-items-center">
        <div>$ ${book.price}</div>
        <button id="rem" class="btn btn-primary" onclick="skip(event)">Skip</button>
         <button id="add" class="btn btn-primary" onclick="addCart(event,'${
           book.asin
         }')">Add</button>
         <button id="rem" class="btn btn-primary d-none" onclick="removeCart(event,'${
           book.asin
         }')">Rem</button>
         </li>
       </ul>
      </div>
    </div>
`;
};

window.skip = (event) => {
  let listItem = event.target.closest(".list-group-item");
  let listGroup = listItem.parentNode;
  let cardDiv = listGroup.parentNode;
  let cardWrapper = cardDiv.parentNode;
  cardWrapper.classList.add("d-none");
};
