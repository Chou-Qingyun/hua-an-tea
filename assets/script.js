const header = document.querySelector(".site-header");

function updateHeaderState() {
  header.classList.toggle("is-scrolled", window.scrollY > 24);
}

updateHeaderState();
window.addEventListener("scroll", updateHeaderState, { passive: true });
