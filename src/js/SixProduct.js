async function fetchProducts() {
  try {
    const response = await fetch('src/json/product.json'); // Update the path to your JSON file
    products = await response.json();
    console.log("Products fetched:", products);
    return products;
  } catch (error) {
    console.error("Error fetching products data:", error);
  }
}

function showProductsByCategories(categories) {
  const productList = document.getElementById("product-list-six");
  productList.innerHTML = "";

  categories.forEach((category) => {
    const filteredProducts = products.filter(
      (product) => product.category === category
    );
    const limitedProducts = filteredProducts.slice(0, 2);

    limitedProducts.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.className = "swiper-slide product-slide ";
      productCard.innerHTML = `
         <div class="card product-card border-0"> 
          <div class="product-card__img">
            <img
              src="${product.image}"  <!-- Make sure to have the correct image path -->
              class="card-img-top"
              alt="${product.name}"
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
            <h5 class="card-title  fw-bold">${product.name}</h5>
            <h6 class="mb-3 card-price  fw-bold">$ ${product.price}</h6>
            <div class="process-one__bottom-btn-box">
              <a href="productDetail.html?id=${product.id}" class="plantpalace-btn process-one__bottom-btn">
                Add to Cart&nbsp;<i class="fa-solid fa-cart-shopping"></i>
              </a>
            </div>
          </div>
      </div>
      `;
      productList.appendChild(productCard);
    });
  });

  // Initialize Swiper
  new Swiper(".six-product-container", {
    spaceBetween: 30,
    speed: 1000,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    breakpoints: {
      1024: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 3,
      },
      450: {
        slidesPerView: 1,
      },
    },
  });
}

// Fetch products and show products by categories once the page is loaded
document.addEventListener("DOMContentLoaded", async function () {
  await fetchProducts(); // Fetch the products
  showProductsByCategories(["IndoorPlants", "EdiblePlants", "Ferns", "Herbs", "Soils"]); // Show products after data is loaded
});
