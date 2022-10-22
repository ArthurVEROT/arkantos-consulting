// Navbar scroll
const navbar = document.querySelector("#navbar");
let lastKnownScrollPosition = 0;

function addScrollClass() {
  navbar.classList.add("scrolled");
}

function addUnscrollClass() {
  navbar.classList.remove("scrolled");
}

document.addEventListener("scroll", (e) => {
  lastKnownScrollPosition = window.scrollY;
  console.log("lastKnownScrollPosition", lastKnownScrollPosition);

  if (lastKnownScrollPosition > 30) {
    window.requestAnimationFrame(() => {
      addScrollClass();
    });
  } else {
    window.requestAnimationFrame(() => {
      addUnscrollClass();
    });
  }
});
