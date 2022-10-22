const mobileFullMenu = document.querySelector(".mobileNavbar");

const Menu = {
  el: {
    ham: document.querySelector(".menu"),
    menuTop: document.querySelector(".menu-top"),
    menuMiddle: document.querySelector(".menu-middle"),
    menuBottom: document.querySelector(".menu-bottom"),
  },

  init: function () {
    Menu.bindUIactions();
  },

  bindUIactions: function () {
    Menu.el.ham.onclick = function (event) {
      Menu.activateMenu(event);
      event.preventDefault();
    };
  },

  activateMenu: function () {
    Menu.el.menuTop.classList.toggle("menu-top-click");
    Menu.el.menuMiddle.classList.toggle("menu-middle-click");
    Menu.el.menuBottom.classList.toggle("menu-bottom-click");
    mobileFullMenu.classList.toggle("unvisible");
    setTimeout(() => {
      navbar.classList.toggle("scrolled");
    }, "500");
  },
};

Menu.init();
