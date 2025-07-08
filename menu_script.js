// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector(".mobile-menu");
const navMenu = document.querySelector("nav ul");

mobileMenuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// Menu Filtering
const filterBtns = document.querySelectorAll(".menu .filter-btn");

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Remove active class from all buttons
    filterBtns.forEach((b) => b.classList.remove("active"));
    // Add active class to clicked button
    btn.classList.add("active");
    // Filter functionality would go here
  });
});

// Gallery Filtering
const galleryFilters = document.querySelectorAll(".gallery .filter-btn");

galleryFilters.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Remove active class from all buttons
    galleryFilters.forEach((b) => b.classList.remove("active"));
    // Add active class to clicked button
    btn.classList.add("active");
    // Filter functionality would go here
  });
});

// Form Submission
const eventForm = document.querySelector(".event-form form");
if (eventForm) {
  eventForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you for your inquiry! Chef Elena will contact you shortly.");
    eventForm.reset();
  });
}

// Newsletter Form
const newsletterForm = document.querySelector(".newsletter-form");
if (newsletterForm) {
  newsletterForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert(
      "Thank you for subscribing! Check your email for the free recipe e-book."
    );
    newsletterForm.reset();
  });
}

// Sticky Header
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: "smooth",
      });

      // Close mobile menu if open
      navMenu.classList.remove("active");
    }
  });
});
