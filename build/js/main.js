/* eslint-disable no-undef */
'use strict';
(function () {
  var page = document.querySelector('.page');
  var body = page.querySelector('body');
  var header = body.querySelector('.header');
  var headerLogin = body.querySelector('.header__login');
  var bottomLogin = body.querySelector('.header__menu-item--bottom-login a');
  var buttonMenu = header.querySelector('.header__toggle');
  var search = header.querySelector('.header__search');
  var headerLogo = header.querySelector('.header__logo');
  var headerCart = header.querySelector('.header__cart-block');
  var headerNav = header.querySelector('.header__nav');
  var headerWrapperNav = header.querySelector('.header__wrapper-nav');
  var noveltySlider = body.querySelector('.novelty__container');
  var faqList = body.querySelector('.faq__list');
  var filterForm = body.querySelector('.filter__form');
  var buttonFilterLink = body.querySelector('.catalog__filter-link');
  var formFilter = body.querySelector('.filter');
  var filterClose = body.querySelector('.filter__close');
  var modal = body.querySelector('.login');
  var modalForm = modal.querySelector('.login__form');
  var modalClose = modal.querySelector('.login__close');
  var mailfield = modal.querySelector('input[name=email]');
  var passwordfield = modal.querySelector('input[password]');

  var ESC = 27;
  var TAB = 9;

  var isStorageSupport = true;
  var storage = '';

  try {
    storage = localStorage.getItem('mailfield');
  } catch (err) {
    isStorageSupport = false;
  }

  function onSubmitForm() {
    if (mailfield.value) {
      if (isStorageSupport) {
        localStorage.setItem('mailfield', mailfield.value);
      }
    }
  }

  function onModalAdd(evt) {
    evt.preventDefault();
    modal.classList.remove('login--deactive');
    page.classList.add('page--active');
    if (storage) {
      mailfield.value = storage;
      passwordfield.focus();
    } else {
      mailfield.focus();
    }
  }

  function onModalClose() {
    modal.classList.add('login--deactive');
    page.classList.remove('page--active');
  }

  function onEscapePressModal(evt) {
    if (evt.keyCode === ESC) {
      if (!modal.classList.contains('login--deactive')) {
        evt.preventDefault();
        onModalClose();
      }
    }
  }

  function onTabPress(evt) {
    if (evt.keyCode === TAB && document.activeElement === modalClose) {
      evt.preventDefault();
      mailfield.focus();
    }
  }

  function onOverlayModal(evt) {
    if (evt.target === evt.currentTarget) {
      onModalClose();
    }
  }

  function onToggleMenu() {
    header.classList.toggle('header--active-menu');
    buttonMenu.classList.toggle('header__toggle--active-menu');
    search.classList.toggle('header__search--active-menu');
    headerLogo.classList.toggle('header__logo--active-menu');
    headerCart.classList.toggle('header__cart-block--active-menu');
    headerNav.classList.toggle('header__nav--active-menu');
    headerNav.classList.add('header__nav--js');
    headerWrapperNav.classList.add('header__wrapper-nav--js');
  }

  function onToggleMenuPage() {
    onToggleMenu();
    page.classList.toggle('page--active');
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

  function onRemoveBlock(buttons, element) {
    for (var i = 0; i < buttons.length; i++) {
      var button = buttons[i];
      button.classList.remove(element);
    }
  }

  function onAddBlock(button, tag, entity) {
    button.addEventListener('click', function (evt) {
      var item = evt.target.closest(tag);
      item.classList.toggle(entity);
    });
  }

  function onAddFilter(evt) {
    evt.preventDefault();
    formFilter.classList.add('filter--active');
    page.classList.add('page--active');
  }

  function onRemoveFilter() {
    formFilter.classList.remove('filter--active');
    page.classList.remove('page--active');
  }

  function onTabPressFilter(evt) {
    if (evt.keyCode === TAB && document.activeElement === filterClose) {
      evt.preventDefault();
      filterBlockFirst.focus();
    }
  }

  function onModalAddButton(evt) {
    evt.preventDefault();
    modal.classList.remove('login--deactive');
    page.classList.add('page--active');

    onToggleMenu();
    if (storage) {
      mailfield.focus();
    }
  }

  onToggleMenu();

  if (filterForm) {
    var filterButtons = filterForm.querySelectorAll('.filter__block-tab');
    var filterBlockFirst = formFilter.querySelector('.filter__block-tab--first button');

    onRemoveBlock(filterButtons, 'filter__block-tab--active');
    onAddBlock(filterForm, 'div', 'filter__block-tab--active');

    buttonFilterLink.addEventListener('click', onAddFilter);
    filterClose.addEventListener('click', onRemoveFilter);
  }

  if (faqList) {
    var faqButtons = faqList.querySelectorAll('.faq__item');

    onRemoveBlock(faqButtons, 'faq__item--active');
    onAddBlock(faqList, 'li', 'faq__item--active');
  }

  document.addEventListener('keydown', onTabPressFilter);
  buttonMenu.addEventListener('click', onToggleMenuPage);
  document.addEventListener('keydown', onTabPress);
  headerLogin.addEventListener('click', onModalAdd);
  bottomLogin.addEventListener('click', onModalAddButton);
  modalForm.addEventListener('click', onSubmitForm);
  modalClose.addEventListener('click', onModalClose);
  modal.addEventListener('click', onOverlayModal);
  window.addEventListener('keydown', onEscapePressModal);

  return swiper;
})();
