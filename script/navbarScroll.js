// Navbar scroll
const navbar = document.querySelector("#navbar-container");
console.log("navbar", navbar);
let lastKnownScrollPosition = 0;

function addScrollClass() {
  navbar.classList.remove("navbar-unscroll");
  navbar.classList.add("navbar-scroll");
}

function addUnscrollClass() {
  navbar.classList.remove("navbar-scroll");
  navbar.classList.add("navbar-unscroll");
}

document.addEventListener("scroll", (e) => {
  lastKnownScrollPosition = window.scrollY;
  console.log("lastKnownScrollPosition", lastKnownScrollPosition);

  if (lastKnownScrollPosition > 30) {
    window.requestAnimationFrame(() => {
      addScrollClass();
    });
  }
  else {
    window.requestAnimationFrame(() => {
      addUnscrollClass();
    });
  }
});
