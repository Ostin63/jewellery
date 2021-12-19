/* eslint-disable no-new */
/* eslint-disable no-undef */
'use strict';
(function () {
  var body = document.querySelector('body');
  var header = body.querySelector('.header');
  var buttonMenu = header.querySelector('.header__toggle');
  var search = header.querySelector('.header__search');
  var headerLogo = header.querySelector('.header__logo');
  var headerCart = header.querySelector('.header__cart-block');
  var headerNav = header.querySelector('.header__nav');
  // var currentDotOut = body.querySelector('.novelty__mobile--current');
  // var totalDotsOut = body.querySelector('.novelty__mobile--total');
  var noveltySlider = body.querySelector('.novelty__container');
  // var noveltyPagination = body.querySelector('.slider-pagination');
  // var activeBulet = document.querySelector('.swiper-pagination-bullet-active');
  var faqList = body.querySelector('.faq__list');
  var faqButtons = faqList.querySelectorAll('.faq__item');

  function onToggleMenu() {
    header.classList.toggle('header--active-menu');
    buttonMenu.classList.toggle('header__toggle--active-menu');
    search.classList.toggle('header__search--active-menu');
    headerLogo.classList.toggle('header__logo--active-menu');
    headerCart.classList.toggle('header__cart-block--active-menu');
    headerNav.classList.toggle('header__nav--active-menu');
  }

  if (noveltySlider) {
    new Swiper('.novelty__container', {
      loop: true,
      slidesPerGroup: 2,
      slidesPerView: 2,
      centeredSlides: false,
      spaceBetween: 30,
      centeredSlidesBounds: true,

      // pagination: {
      //   el: '.novelty__slider-pagination',
      //   clickable: 'true',
      //   renderBullet: function (index, className) {
      //     return '<span class="' + className + '">' + (index + 1) + '</span>';
      //   },
      // },

      navigation: {
        nextEl: '.novelty__slider-button--next',
        prevEl: '.novelty__slider-button--prev',
      },

      breakpoints: {
        0: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          pagination: {
            el: '.novelty__slider-pagination',
            type: 'fraction',
            renderFraction: function (currentClass, totalClass) {
              return '<span class="' + currentClass + '"></span>' + '&ensp;of&ensp;' + '<span class="' + totalClass + '"></span>';
            },
          },
        },
        1023: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          pagination: {
            el: '.novelty__slider-pagination',
            clickable: 'true',
            renderBullet: function (index, className) {
              return '<span class="' + className + '">' + (index + 1) + '</span>';
            },
          },
        },
        1169: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          pagination: {
            el: '.novelty__slider-pagination',
            clickable: 'true',
            renderBullet: function (index, className) {
              return '<span class="' + className + '">' + (index + 1) + '</span>';
            },
          },
        },
      },
    });

    // totalDotsOut.textContent = noveltyPagination.children.length;
    // currentDotOut.textContent = document.querySelector('.swiper-pagination-bullet-active').textContent;
  }

  if (faqList) {
    for (var i = 0; i < faqButtons.length; i++) {
      faqButtons[i].classList.remove('faq__item--active');
    }

    faqList.addEventListener('click', function (evt) {
      var faqItem = evt.target.closest('li');
      faqItem.classList.toggle('faq__item--active');
    });
  }

  onToggleMenu();

  buttonMenu.addEventListener('click', onToggleMenu);
})();
