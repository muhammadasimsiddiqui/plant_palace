// Header Scroll
function luxelivingHeader() {
  fetch("components/header.html")
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("plantpalace").innerHTML = html;
      attachScrollListener();
      headerNavhover();
      updateWishlistBadge();
      updateCartBadge();
    });
}
luxelivingHeader();
function attachScrollListener() {
  let nav = document.getElementById("plantpalace"); // Make sure this ID matches your header's ID
  window.onscroll = function () {
    if (document.documentElement.scrollTop > 50) {
      nav.classList.add("navbar-shadow");
      nav.classList.add("sticky-top");
    } else {
      nav.classList.remove("navbar-shadow");
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

document.addEventListener("DOMContentLoaded", function () {
  fetch("components/footer.html")
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("footerplantpalace").innerHTML = html;
      initializeFooter();
    });
});

function initializeFooter() {}

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

// Change Page Shop
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

if (sessionStorage.getItem("isLogin")) {
  $("#logtext").html("Logout");
  $("#logtext2").html("Logout");
}

function SignUp() {
  username = $("#name").val();
  mobile = $("#mobile").val();
  email = $("#email").val();
  password = $("#password").val();

  if (username == "" || mobile == "" || email == "" || password == "") {
    alert("Please fill all fields");
  } else {
    sessionStorage.setItem("name", username);
    sessionStorage.setItem("mobile", mobile);
    sessionStorage.setItem("email", email);
    sessionStorage.setItem("password", password);
    sessionStorage.setItem("isLogin", true);
    $("#logtext").html("Logout");
    $("#logtext2").html("Logout");
    alert("Sign Up Successfully");
    window.location.href = "cart.html";

    // sessionStorage.clear();
  }
}

$("#btnCheckout").click(function () {
  if (!sessionStorage.getItem("isLogin")) {
    alert("Please Signup/Login to checkout");
    window.location.href = "signup.html";
  } else {
    localStorage.removeItem("cart");
    alert("Your order has been processed.");
    window.location.href = "index.html";
  }
});

$("#logtext").click(function () {
  if ($("#logtext").html() == "Logout") {
    $("#logtext").html("Sign Up");

    window.location.reload();
    sessionStorage.clear();
  } else {
    window.location.href = "signup.html";
  }
});
var swiper = new Swiper(".testinomials-crousel", {
  spaceBetween: 30,
  speed: 1500,
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    480: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  mousewheel: false,
  keyboard: true,
});

//  testinomial
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
