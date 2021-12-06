var mobileMenuButton = document.getElementById("mobile-btn-menu");
var header = document.getElementById("header");
var SubNavItem = document.querySelector("#nav .subnav");
var headerLength = header.clientHeight;
var navList = document.querySelectorAll("#nav li > a[href*='#']");
var isOpenSubNav = true;
//Dong mo menu
console.log(SubNavItem);
mobileMenuButton.onclick = function () {
  header.clientHeight === headerLength
    ? (header.style.height = "auto")
    : (header.style.height = null);
};
navList.forEach((navItem) => {
  navItem.onclick = function (event) {
    var isNavSub =
      navItem.nextElementSibling &&
      navItem.nextElementSibling.classList.contains("subnav");
    if (!isNavSub) {
      header.style.height = null;
    } else {
      if (isOpenSubNav) {
        SubNavItem.style.position = "initial";
        isOpenSubNav = false;
        event.preventDefault();
      } else {
        SubNavItem.style.position = "absolute";
        isOpenSubNav = true;
      }
    }
  };
});
