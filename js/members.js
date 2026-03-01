// Mobile menu toggle
function toggleMenu() {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");
  if (hamburger && navLinks) {
    hamburger.classList.toggle("open");
    navLinks.classList.toggle("open");
  }
}

// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (navbar) {
    navbar.classList.toggle("scrolled", window.scrollY > 30);
  }
});

// Close mobile menu on link click
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".navbar__links a").forEach((link) => {
    link.addEventListener("click", () => {
      const hamburger = document.getElementById("hamburger");
      const navLinks = document.getElementById("navLinks");
      if (hamburger && navLinks) {
        hamburger.classList.remove("open");
        navLinks.classList.remove("open");
      }
    });
  });
});