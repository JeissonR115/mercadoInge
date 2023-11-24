import {hideAndShowMenu} from './menu.js'

const menuIconElement = document.querySelector(".menu__icon");
const menuListElement = document.querySelector(".menu__list");
menuIconElement.addEventListener("click",()=>{hideAndShowMenu({clickElement:menuIconElement,affectedElement:menuListElement})} );
menuListElement.addEventListener("click",()=>{hideAndShowMenu({clickElement:menuIconElement,affectedElement:menuListElement})} );
