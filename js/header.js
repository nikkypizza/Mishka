var toggler = document.querySelector(".page-header__toggler");
var show = document.querySelector(".page-header__cart-wrapper");
var show2 = document.querySelector("nav");
var show3 = document.querySelector(".page-header__search-wrapper");

toggler = toggler.addEventListener("click", function (evt) {
  evt.preventDefault();
  show.classList.toggle("page-header--display-flex");
  show2.classList.toggle("nav--display-block");
  show3.classList.toggle("page-header--display-flex");
});
