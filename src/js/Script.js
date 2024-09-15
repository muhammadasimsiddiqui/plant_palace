// Header Functions
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

// WhyChooseUse
function plantpalaceWhyChooseUs() {
  fetch("components/whychooseus.html")
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("whyChooseus").innerHTML = html;
    });
}
plantpalaceWhyChooseUs();



            // Load the contact section and initialize form functionality
            function plantpalacecontactSection() {
              fetch("components/contact.html")
                  .then(response => response.text())
                  .then(html => {
                      document.getElementById("contactSection").innerHTML = html;
                      contact_form(); // Initialize form inputs
                      // Attach form submission handler after form is loaded
                      const contactForm = document.getElementById("contactForm");
                      if (contactForm) {
                          contactForm.addEventListener("submit", formSubmission);
                      }
                  })
                  .catch(error => console.error('Error loading contact section:', error));
          }
  
          // Initialize contact form inputs with focus and blur effects
          function contact_form() {
              const inputs = document.querySelectorAll(".contact_form_input");
  
              function focusFunc() {
                  let parent = this.parentNode;
                  parent.classList.add("focus");
              }
  
              function blurFunc() {
                  let parent = this.parentNode;
                  if (this.value === "") {
                      parent.classList.remove("focus");
                  }
              }
  
              inputs.forEach(input => {
                  input.addEventListener("focus", focusFunc);
                  input.addEventListener("blur", blurFunc);
              });
          }
  
          // Handle form submission
          function formSubmission(event) {
              event.preventDefault(); // Prevent the default form submission
  
              // Get form data
              const formData = new FormData(document.getElementById("contactForm"));
              const data = {};
              formData.forEach((value, key) => {
                  data[key] = value;
              });
  
              // Retrieve existing data from sessionStorage
              let existingData = JSON.parse(sessionStorage.getItem("formData"));
              if (!Array.isArray(existingData)) {
                  existingData = [];
              }
              existingData.push(data);
  
              // Store updated data in sessionStorage
              sessionStorage.setItem("formData", JSON.stringify(existingData));
  
              // Construct mailto link
              const email = "info@plantpalace.com";
              const subject = encodeURIComponent("Contact Form Submission");
              const body = encodeURIComponent(`Name: ${data.name || 'N/A'}\nEmail: ${data.email || 'N/A'}\nMessage: ${data.message || 'N/A'}`);
              const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;
  
              // Open the email client
              window.location.href = mailtoLink;
  
              // Optionally reload the contact section
              setTimeout(() => {
                  plantpalacecontactSection();
              }, 500); // Delay to ensure the email client has time to open
  
              // Optionally reload the whole page
              // setTimeout(() => {
              //     location.reload();
              // }, 500); // Delay to ensure the email client has time to open
  
              // Log saved form data
              console.log("Saved form data:", JSON.parse(sessionStorage.getItem("formData")));
  
              return false; // Prevent any further action
          }
  
          // Initialize the contact section
          plantpalacecontactSection();

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
