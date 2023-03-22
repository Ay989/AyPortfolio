// Smooth scrolling effect for anchor links
const navLinks = document.querySelectorAll("nav ul li a");
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = e.target.getAttribute("href");
    const location = document.querySelector(target).offsetTop;
    window.scrollTo({
      top: location,
      behavior: "smooth",
    });
  });
});

