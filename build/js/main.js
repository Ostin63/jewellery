'use strict';
(function () {
  var body = document.querySelector('body');
  var header = body.querySelector('.header');
  var buttonMenu = header.querySelector('.header__toggle');
  var search = header.querySelector('.header__search');
  var headerLogo = header.querySelector('.header__logo');
  var headerCart = header.querySelector('.header__cart-block');
  var headerNav = header.querySelector('.header__nav');

  function onToggleMenu() {
    header.classList.toggle('header--active-menu');
    buttonMenu.classList.toggle('header__toggle--active-menu');
    search.classList.toggle('header__search--active-menu');
    headerLogo.classList.toggle('header__logo--active-menu');
    headerCart.classList.toggle('header__cart-block--active-menu');
    headerNav.classList.toggle('header__nav--active-menu');
  }

  onToggleMenu();

  buttonMenu.addEventListener('click', onToggleMenu);
})();
