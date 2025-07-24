document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.querySelector('.menu__btn');
    const closeBtn = document.querySelector('.menu__close');
    const menuUl = document.querySelector('.header__list');

    menuBtn.addEventListener('click', function () {
        menuUl.classList.toggle('active');
    });

    closeBtn.addEventListener('click', function () {
        menuUl.classList.remove('active');
    });
});