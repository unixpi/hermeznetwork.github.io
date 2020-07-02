new SmoothScroll("[data-scroll]");

function getHeaderNavContainer() {
  return document.querySelector(".header-nav-container");
}

function onToggleBurgerMenu() {
  var headerNavContainer = getHeaderNavContainer();

  if (headerNavContainer.classList.contains("header-nav-container--open")) {
    headerNavContainer.classList.remove("header-nav-container--open")
  } else {
    headerNavContainer.classList.add("header-nav-container--open")
  }
}

function onCloseBurgerMenu() {
  var headerNavContainer = getHeaderNavContainer();

  if (headerNavContainer.classList.contains("header-nav-container--open")) {
    headerNavContainer.classList.remove("header-nav-container--open")
  }
}