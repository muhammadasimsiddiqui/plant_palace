document.addEventListener("DOMContentLoaded", function () {
  HomeProds(); // Initialize with default category on page load
});

async function loadProducts() {
  try {
    const response = await fetch('src/json/product.json'); // Replace with the correct path to your JSON file
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching the product data:", error);
  }
}

async function HomeProds(categoryId = "IndoorPlants") {
  const products = await loadProducts();

  if (!products) {
    console.error('No products data received.');
    return;
  }

  // Ensure these elements exist before trying to modify them
  const categoryname = document.getElementById("categorynameheading");
  const productListCat = document.getElementById("product-Cat-card");

  if (!categoryname || !productListCat) {
    console.error("Required DOM elements not found.");
    return;
  }

  categoryname.innerHTML = categoryId ? `${categoryId}` : "All Products";
  productListCat.innerHTML = "";

  let prodLen = 1;
  for (const productCat of products.filter(proCat => proCat.category === categoryId)) {
    if (prodLen <= 12) {
      const productCatcard = document.createElement("div");
      productCatcard.className = "card product-card col-md-4 col-lg-3 border-0";
      productCatcard.innerHTML = `
          <div class="product-card__img">
            <img
              src="${productCat.images[0]}"
              class="card-img-top"
              alt="${productCat.name}"
            />
          </div>
          <div class="card-body">
            <div style="color: var(--plantpalace-black)">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-regular fa-star"></i>
            </div>
            <h5 class="card-title  fw-bold">${productCat.name}</h5>
            <h6 class="mb-3 card-price  fw-bold">$ ${productCat.price}</h6>
            <div class="process-one__bottom-btn-box">
              <a href="productDetail.html?id=${productCat.id}" class="plantpalace-btn process-one__bottom-btn">
                Add to Cart&nbsp;<i class="fa-solid fa-cart-shopping"></i>
              </a>
            </div>
          </div>
      `;
      productListCat.appendChild(productCatcard);
      prodLen++;
    } else {
      break;
    }
  }
}
