const togglebtn = document.querySelector('.upperbar__togglebtn');
const menu = document.querySelector(".upperbar__MENU");
const icons = document.querySelector(".upperbar__ALPHALINK");

togglebtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
} );
