window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

(function() {
  'use strict';

  function trackScroll() {
    var scrolled = window.pageYOffset;
    var coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
      goTopBtn.classList.add('back_to_top-show');
    }
    if (scrolled < coords) {
      goTopBtn.classList.remove('back_to_top-show');
    }
  }

  function backToTop() {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -80);
      setTimeout(backToTop, 0);
    }
  }

  var goTopBtn = document.querySelector('.back_to_top');

  window.addEventListener('scroll', trackScroll);
  goTopBtn.addEventListener('click', backToTop);
})();

var mySwiper = new Swiper('.galleries', {
  observer: true,
  observeParents: true,
  spaceBetween: 0,
  slidesPerView: 1,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  navigation: {
    prevEl: 'swiper-button-prev',
    nextEl: '.swiper-button-next'
    
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    //dynamicBullets: true,
  },
});

const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const link = document.querySelector(".link");
const close = document.querySelector(".menu-close");
const menuLinks = document.querySelectorAll(".link");


function menuActive() {
  if(menu.classList.contains("menu-active")) {
    menu.classList.remove("menu-active");
    menuBtn.style.display = "block";
    close.style.display = "none";
  } else {
    menu.classList.add("menu-active");
    menuBtn.style.display = "none";
    close.style.display = "block";
  };
};

menuBtn.addEventListener("click",menuActive);
close.addEventListener("click", menuActive);
menuLinks.forEach(function (link) {
  link.addEventListener('click', menuActive);
});

