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

const mask = document.querySelector('.loader');

window.addEventListener('load', () => {
    if (mask) {
        mask.classList.add('kil');
        setTimeout(() => {
            mask.remove(); // исправлено с remave() на remove()
        }, 600); // совпадает с transition
    }
});