let productDiv = document.querySelector(".proo");
var categorylistDiv = document.querySelector(".shop-category-list");
let allCat = [];

// Fetch products data from JSON
const fetchProducts = async () => {
  try {
    const response = await fetch('src/json/product.json'); // Update with the correct path to your JSON
    const products = await response.json();
    return products;
  } catch (error) {
    console.error("Error fetching products data: ", error);
  }
};

let displayProduct = async (allCheckCat = []) => {
  let products = await fetchProducts(); 
  productDiv.innerHTML = "";

  products.forEach((element) => {
    if (!allCat.includes(element.category)) {
      categorylistDiv.innerHTML += `              
      <label for="" class="d-block pt-4">
       <p> <input type="checkbox" onclick='shopCategoryFilter()' value="${element.category}" /> ${element.category}</p>
      </label>`;
      allCat.push(element.category);
    }

    if (allCheckCat.length == 0) {
      allCheckCat = allCat;
    }

    if (allCheckCat.includes(element.category)) {
      productDiv.innerHTML += `
      <div class="card product-card col-md-4 border-0"> 
          <div class="product-card__img">
            <img
              src="${element.images[0]}" 
              class="card-img-top"
              alt="${element.name}"
            />
          </div>
          <div class="card-body">
          <h5>${element.id}</h5>
            <div style="color: var(--plantpalace-black)">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-regular fa-star"></i>
            </div>
            <h5 class="card-title  fw-bold">${element.name}</h5>
            <h6 class="mb-3 card-price  fw-bold">$ ${element.price}</h6>
            <div class="process-one__bottom-btn-box">
              <a href="productDetail.html?id=${element.id}" class="plantpalace-btn process-one__bottom-btn">
                Add to Cart&nbsp;<i class="fa-solid fa-cart-shopping"></i>
              </a>
            </div>
          </div>
      </div>
    `;
    }
  });
};

displayProduct();

let shopCategoryFilter = () => {
  let categoryCheckInput = document.querySelectorAll("input[type='checkbox']");
  let checkCategoryData = [];
  categoryCheckInput.forEach((e) => {
    if (e.checked) {
      checkCategoryData.push(e.value);
    }
  });
  displayProduct(checkCategoryData);
};
