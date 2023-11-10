export const createMenuItem = ({classModifier = "", elementContent}) => {
    const menuItemElement = document.createElement("li");
    const className = "menu__item";
    menuItemElement.classList.add(className);
    menuItemElement.classList.add(`${className }--${classModifier}`);

    menuItemElement.appendChild(elementContent);
    return menuItemElement
}
