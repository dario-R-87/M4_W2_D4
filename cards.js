const origin=window.location.origin;

export const getCard = (book) => {
  return `
	<div class="col-6 col-md-4 col-lg-3">
     <div class="card mt-4 ${book.selected && "added"}">
        <div class="ratio ratio-16x9"><img src=${
          book.img
        } class="card-img-top" alt="image" /></div>
        <div class="card-body">
         <h5 class="card-title">${book.title}</h5>
         <button id="details" class="details btn btn-primary"><a href="${origin}/detail.html?id=${
           book.asin
         }">View Details</a></button>
        </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item d-flex justify-content-between fw-bold align-items-center">
        <div>$ ${book.price.toFixed(2)}</div>
        <button id="id_${book.asin}" class="skip btn btn-primary ${
    book.selected && "d-none"
  }">Skip</button>
         <button id="id_${book.asin}" class="add btn btn-primary ${
    book.selected && "d-none"
  }">Add</button>
         <button id="id_${book.asin}" class="rem btn btn-primary ${
    !book.selected && "d-none"
  }">Rem</button>
         </li>
       </ul>
      </div>
    </div>
`;
};

export const getDetails = (book) => {
  return `
  <h1 id="title" class="col-3">${book.title}</h1>  
  <div class="col-3">
    <img id="img_detail" src="${book.img}"/>
  </div>
  <div class="col-6">
   <h2>Category: ${book.category}</h2>
   <h2>Asin Code: ${book.asin}</h2>
   <h2>Price: $ ${book.price.toFixed(2)}</h2>
  </div>
  `;
};
