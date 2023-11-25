import { hideAndShowMenu } from './menu.js'
import { createFooter } from './footer.js';
import { createDefaultHead } from './head.js';

const defaultListStyleSheet = [
    '/css/menu.css',
    '/css/styles.css',
    '/css/button.css',
    '/css/index.css',
    '/css/footer.css'
]
createDefaultHead({
    imgFavicon: '/pictures/logo/ico/icono_oscuro.ico',
    listStyles: defaultListStyleSheet,
    listFonts: [
        'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200',
        'https://fonts.googleapis.com/css2?family=Saira:ital,wght@0,100;0,400;0,600;0,800;1,100;1,400;1,600;1,800&display=swap'
    ]
});

document.addEventListener("DOMContentLoaded", () => {
    createFooter();
});

const menuIconElement = document.querySelector(".menu__icon");
const menuListElement = document.querySelector(".menu__list");
menuIconElement.addEventListener("click", () => { hideAndShowMenu({ clickElement: menuIconElement, affectedElement: menuListElement }) });
menuListElement.addEventListener("click", () => { hideAndShowMenu({ clickElement: menuIconElement, affectedElement: menuListElement }) });
