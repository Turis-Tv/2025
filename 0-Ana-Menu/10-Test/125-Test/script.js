'use strict';

const page = document.querySelector('#page');
const hiddenMnu = document.querySelector('.hidden-mnu');
const mnuOverlay = document.querySelector('.mnu-overlay');
const hamburger = document.querySelector('.hamburger');
const preloader = document.querySelector('#preloader');
const smokePreload = document.querySelector('.smoke-preload');


function openMnu() {
  page.classList.toggle('page_move');
  hiddenMnu.classList.toggle('hidden-mnu_move');
  mnuOverlay.classList.toggle('mnu-overlay_active');
  setTimeout(() => hamburger.classList.toggle('is-active'), 350);
}

function closeMnu() {
  page.classList.remove('page_move');
  hiddenMnu.classList.remove('hidden-mnu_move');
  mnuOverlay.classList.remove('mnu-overlay_active');
  setTimeout(() => hamburger.classList.remove('is-active'), 350);
}


hamburger.addEventListener('mousedown', openMnu);
mnuOverlay.addEventListener('mousedown', closeMnu);

// Hammer
Hammer(hiddenMnu).on("swiperight", closeMnu);
Hammer(mnuOverlay).on("swiperight", closeMnu);


window.addEventListener('load', () => {
  // preloader and smoke
  preloader.classList.add('loaded');
  setTimeout(() => {
    // preloader.classList.add('no-anim')
    preloader.parentNode.removeChild(preloader);
  }, 1000);
  smokePreload.classList.add('smoke-preload_load');
});



Scrollbar.initAll({
  continuousScrolling: false });



// other

noDragElements('img, a');

function noDragElements(selector) {
  const noDragObjects = [...document.querySelectorAll(selector)];
  noDragObjects.forEach(el => {
    el.addEventListener('dragstart', event => event.preventDefault());
  });
}