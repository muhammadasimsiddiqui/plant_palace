// Function to load products from a JSON file
async function loadProducts() {
  try {
     const response = await fetch('../json/product.json'); // Replace with the correct path to your JSON
     const data = await response.json();
     return data;
  } catch (error) {
     console.error("Error fetching the product data:", error);
  }
}

// Function to view products category-wise
async function viewCategoryWiseProduct(categoryId) {
  const products = await loadProducts();  // Load products from JSON
  
  // Filter products by the selected category
  const productCat = products.filter(proCat => proCat.category === categoryId);

  // Update the category heading
  const categoryname = document.getElementById("categorynameheading");
  categoryname.innerHTML = categoryId ? `${categoryId}` : "All Products";

  // Update the product list container
  const productListCat = document.getElementById("product-Cat-card");
  productListCat.innerHTML = "";

  // Handle case when no products are found for the category
  if (productCat.length === 0) {
     productListCat.innerHTML = `<p>No products found for this category.</p>`;
     return;
  }

  // Loop through filtered products and create product cards
  productCat.forEach(productCat => {
     const productCatcard = document.createElement("div");
     productCatcard.className = "col-md-3 text-start py-3 m-lg-3";
     productCatcard.innerHTML = `
        <img
           class="img-fluid product-card-image"
           src="img/products/1_1.jpg"
           alt="${productCat.name}"
        />
        <h5 class="product-card-brand mt-3">${productCat.brand}</h5>
        <h5 class="mt-1 product-card-name">${productCat.name}</h5>
        <div class="product-star-rating mt-1">
           <i class="fas fa-star"></i>
           <i class="fas fa-star"></i>
           <i class="fas fa-star"></i>
           <i class="fas fa-star"></i>
           <i class="far fa-star"></i>
           (2,749)
        </div>
        <h4 class="mt-1 product-card-price">$ ${productCat.variations[0].price}</h4>
        <p class="mt-3 product-card-des">${productCat.description}</p>
        <a href="productDetail.html?id=${productCat.id}"> 
        <button class="btn-view mt-3">
           Add to Cart 
           <i class="fa-solid fa-basket-shopping"></i>
        </button>
        </a>
     `;
     productListCat.appendChild(productCatcard);
  });
}
