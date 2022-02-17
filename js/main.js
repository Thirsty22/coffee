let burgerBtn = document.querySelector('.burger__btn');
let firstLine = document.querySelector('.first-line');
let secondLine = document.querySelector('.second-line');
let thirdLine = document.querySelector('.third-line');
let menuList = document.querySelector('.nav__list');
let siteBody = document.querySelector('.body');


burgerBtn.addEventListener('click', function() {
    firstLine.classList.toggle('first-line--rotate');
    secondLine.classList.toggle('second-line--remove');
    thirdLine.classList.toggle('third-line--rotate');
    menuList.classList.toggle('nav__list--active');
    siteBody.classList.toggle('body--disable')
});