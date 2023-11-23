import { createMenuList, hideAndShowMenu} from './menu.js'
import { createCardList} from './card.js'
const response = await fetch("https://raw.githubusercontent.com/JeissonR115/mercadoInge/main/info.json");
const data = await response.json();

const menuIconElement = document.querySelector(".menu__icon");
const menuListElement = document.querySelector(".menu__list");
menuIconElement.addEventListener("click",()=>{hideAndShowMenu({clickElement:menuIconElement,affectedElement:menuListElement})} );
menuListElement.addEventListener("click",()=>{hideAndShowMenu({clickElement:menuIconElement,affectedElement:menuListElement})} );
// createMenuList({parent:menuListElement, listItems: data["menu__list"]})

const summaryListElement = document.querySelector(".team__list");
const summaryItems = data["members__list"];
createCardList({parent: summaryListElement, listItems:summaryItems})