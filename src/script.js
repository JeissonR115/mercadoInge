import { createMenuList, hideAndShowMenu} from './menu.js'
const response = await fetch("https://raw.githubusercontent.com/JeissonR115/mercadoInge/main/info.json");
const data = await response.json();

const menuListElement = document.querySelector(".menu__list");
const menuIconElement = document.querySelector(".menu__icon");

if (menuListElement && menuIconElement) {
  menuIconElement.addEventListener("click",()=>{hideAndShowMenu({clickElement:menuIconElement,affectedElement:menuListElement})} );
} else {
  console.error("Menu element or menu icon not found in the document.");
}


const navItems = data["menu__list"];
createMenuList({parent:menuListElement, listItems:navItems})