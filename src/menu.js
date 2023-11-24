import { createButton } from "./button.js";
const defaultMenuListElement = document.querySelector('.menu__list');
export const defaultMenuListItems = [
    {
        classModifier: "active",
        href: "/index.html",
        value: "Inicio"
    }
]
export const createMenuItem = ({classModifier = "", elementContent}) => {
    const menuItemElement = document.createElement("li");
    const className = "menu__item";
    menuItemElement.classList.add(className);
    menuItemElement.classList.add(`${className }--${classModifier}`);

    menuItemElement.appendChild(elementContent);
    return menuItemElement
}
export const createMenuList = ({parent = defaultMenuListElement,listItems = defaultMenuListItems}) => {
    parent.innerHTML = '';
    listItems.forEach((navItem,i=0) => {
      const element = createButton(navItem)
      const menuItemElement = createMenuItem({classModifier:navItem.classModifier,elementContent:element});
      parent.appendChild(menuItemElement)
    });
}
export const hideAndShowMenu = ({clickElement, affectedElement}) => {
    affectedElement.classList.toggle("visible");
    affectedElement.classList.toggle("no-visible");

    if (affectedElement.classList.contains("no-visible")) {
        clickElement.querySelector('span').style.transform = "rotateY(0deg)";
        setTimeout(() => {
            affectedElement.style.display = "none";
        }, 250);
    } else {
        clickElement.querySelector('span').style.transform = "rotateY(180deg)";
        affectedElement.style.display = "flex";
    }
}