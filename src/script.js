const menuListElement = document.querySelector(".menu__list");
const menuIconElement = document.querySelector(".menu__icon");
const menuIconSpanElement = menuIconElement.querySelector("span");

import { createButton } from "./DOM/button.js";
import { createMenuItem } from "./DOM/menuItem.js";

document.querySelector(".m").appendChild(createMenuItem({classModifier:"1",elementContent:createButton({classModifier:"button",href:"https://jeissonr115.com",value:"holas estos"})}))
 
if (menuListElement && menuIconElement) {
  menuIconElement.addEventListener("click", function () {
    menuListElement.classList.toggle("visible");
    menuListElement.classList.toggle("no-visible");

    if (menuListElement.classList.contains("no-visible")) {
      menuIconSpanElement.style.transform = "rotateY(0deg)";
      setTimeout(() => {
        menuListElement.style.display = "none";
      }, 250);
    } else {
      menuIconSpanElement.style.transform = "rotateY(180deg)";
      menuListElement.style.display = "flex";
    }
  });
} else {
  console.error("Menu element or menu icon not found in the document.");
}
