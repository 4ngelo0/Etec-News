const btn = document.querySelector('.menu-btn');
const btn_close = document.querySelector('.fechar');

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    const nav = document.querySelector('.sidebar');
    nav.classList.toggle('active');
    const btn = document.querySelector('.menu-btn');
    btn.classList.toggle('active');

}

btn.addEventListener('click', toggleMenu);
btn.addEventListener('touchstart', toggleMenu);
btn_close.addEventListener('click', toggleMenu);
btn_close.addEventListener('touchstart', toggleMenu);

