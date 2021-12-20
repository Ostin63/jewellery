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
  var noveltySlider = body.querySelector('.novelty__container');

  function onToggleMenu() {
    header.classList.toggle('header--active-menu');
    buttonMenu.classList.toggle('header__toggle--active-menu');
    search.classList.toggle('header__search--active-menu');
    headerLogo.classList.toggle('header__logo--active-menu');
    headerCart.classList.toggle('header__cart-block--active-menu');
    headerNav.classList.toggle('header__nav--active-menu');
  }

  if (noveltySlider) {
    var swiper = new Swiper('.novelty__container', {
      slidesPerGroup: 2,
      slidesPerView: 2,
      centeredSlides: false,
      spaceBetween: 30,
      centeredSlidesBounds: true,

      navigation: {
        nextEl: '.novelty__slider-button--next',
        prevEl: '.novelty__slider-button--prev',
      },

      pagination: {
        el: '.novelty__slider-pagination',
        type: 'fraction',
        renderFraction: function (currentClass, totalClass) {
          return (
            '<span class="' + currentClass + '"></span>' + '&ensp;of&ensp;' + '<span class="' + totalClass + '"></span>'
          );
        }
      },
      breakpoints: {
        767: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          pagination: {
            el: '.novelty__slider-pagination',
            type: 'bullets',
            clickable: true,
            renderBullet: function (index, className) {
              return (
                '<span class="' + className + '">' + (index + 1) + '</span>'
              );
            }
          }
        },
        1023: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          pagination: {
            el: '.novelty__slider-pagination',
            type: 'bullets',
            clickable: true,
            renderBullet: function (index, className) {
              return (
                '<span class="' + className + '">' + (index + 1) + '</span>'
              );
            }
          }
        },
        1169: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          pagination: {
            el: '.novelty__slider-pagination',
            type: 'bullets',
            clickable: true,
            renderBullet: function (index, className) {
              return (
                '<span class="' + className + '">' + (index + 1) + '</span>'
              );
            }
          }
        }
      }
    });

    swiper.on('breakpoint', function () {
      swiper.pagination.render();
      swiper.pagination.update();
    });

  }

  if (faqList) {
    var faqList = body.querySelector('.faq__list');
    var faqButtons = faqList.querySelectorAll('.faq__item');

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

  return swiper;
})();
