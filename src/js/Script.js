// Header Functions
// Header Scroll
function plantpalaceHeader() {
  fetch("components/header.html")
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("plantpalace").innerHTML = html;
      attachScrollListener();
      headerNavhover();
      updateWishlistBadge();
      updateCartBadge();
      updateHeaderButton();
    });
}
plantpalaceHeader();
function attachScrollListener() {
  let navUpper = document.getElementById("header_upper"); // Make sure this ID matches your header's ID
  window.onscroll = function () {
    if (document.documentElement.scrollTop > 50) {
      navUpper.classList.add("navbar-shadow");
      navUpper.classList.remove("mt-3");
    } else {
      navUpper.classList.add("mt-3");
      navUpper.classList.remove("navbar-shadow");
    }
  };
}

//NavBar Add And Remove Active Classes
function headerNavhover() {
  const currentPage = window.location.pathname.toLowerCase();
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    const linkPathname = new URL(link.href).pathname.toLowerCase();
    const hasDropdown =
      link.nextElementSibling &&
      link.nextElementSibling.classList.contains("dropdown-menu");
    if (currentPage === linkPathname && !hasDropdown) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

// Footer
document.addEventListener("DOMContentLoaded", function () {
  fetch("components/footer.html")
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("footerplantpalace").innerHTML = html;
      initializeFooter();
    });
});

function initializeFooter() {}

// Testinomial
function plantpalaceTestinomial() {
  fetch("components/testinomial.html")
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("ourTestinomial").innerHTML = html;
      $(document).ready(function () {
        var silder = $(".owl-carousel");
        silder.owlCarousel({
          autoplay: true,
          autoplayTimeout: 3000,
          autoplayHoverPause: false,
          items: 1,
          stagePadding: 20,
          center: true,
          nav: false,
          margin: 50,
          dots: true,
          loop: true,
          responsive: {
            0: { items: 1 },
            480: { items: 2 },
            575: { items: 2 },
            768: { items: 2 },
            991: { items: 2 },
            1200: { items: 3 },
          },
        });
      });
    });
}
plantpalaceTestinomial();

// Counter
let targetElements = document.querySelectorAll(".digit-box");
let animationtimming = 0.0001;

targetElements.forEach((targetElement) => {
  let ValueOne = 0;
  let ValueTwo = parseInt(targetElement.getAttribute("data-value"));
  let timing = Math.floor(animationtimming / ValueTwo);
  let Counter = setInterval(function () {
    ValueOne += 1;
    targetElement.textContent = ValueOne;
    if (ValueOne == ValueTwo) {
      clearInterval(Counter);
    }
  }, timing);
});

// Change Page Functions
function shop() {
  window.location.href = "shop.html";
}
function about() {
  window.location.href = "about.html";
}

// Contact Form
function formsubmition() {
  window.location.href = "mailto:info.muhammadasimsiddiqui@gmail.com";
  document.getElementById("myForm").reset();
  return false;
}

function addtocartform() {
  // Show SweetAlert dialog
  Swal.fire({
    title:
      "<p>Order Has Been Successfully Placed.</p> <h4>Thanks For Choosing Us!</h4>",
    text: "",
    icon: "success",
    confirmButtonText: "Continue Shopping",
    customClass: {
      confirmButton: "main-btn",
    },
  }).then((result) => {
    result.isconfirmed((window.location.href = "shop.html"));
  });

  return false;
}

//

