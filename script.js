// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector(".mobile-menu");
const navMenu = document.querySelector("nav ul");

mobileMenuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// Category Filtering
const categoryTabs = document.querySelectorAll(".category-tab");
const menuItems = document.querySelectorAll(".menu-item");

categoryTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // Remove active class from all tabs
    categoryTabs.forEach((t) => t.classList.remove("active"));
    // Add active class to clicked tab
    tab.classList.add("active");

    const category = tab.getAttribute("data-category");

    // Show/hide menu items based on category
    menuItems.forEach((item) => {
      if (
        category === "all" ||
        item.getAttribute("data-category") === category
      ) {
        item.style.display = "flex";
      } else {
        item.style.display = "none";
      }
    });
  });
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
