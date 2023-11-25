import { createButton } from "./button.js";
const createCardElement = (
    {
        classModifier = "",
        title = "",
        description = "",
        img = {}
    }
) => {
    const className = "card"
    const cardElement = document.createElement("div");
    cardElement.classList.add(className, `${className}--${classModifier}`);

    const titleElement = document.createElement("h3");
    titleElement.classList.add(`${className}__title`);
    titleElement.textContent = title;

    const descriptionElement = document.createElement("p");
    descriptionElement.classList.add(`${className}__description`);
    descriptionElement.textContent = description;

    const imageElement = document.createElement("img");
    imageElement.src = img.href;
    imageElement.alt = img.alt;

    const imageContainerElement = document.createElement("div");
    imageContainerElement.classList.add(`${className}__img`,"img");
    imageContainerElement.appendChild(imageElement);

    // const buttonElement = createButton({
    //     classModifier: classModifier,
    //     href: a.href,
    //     value: a.value
    // });

    cardElement.appendChild(titleElement);
    cardElement.appendChild(descriptionElement);
    cardElement.appendChild(imageContainerElement);
    // cardElement.appendChild(buttonElement);

    return cardElement;
}
export const createProductCardElement = (
    {
        classModifier = "",
        title = "",
        description = "",
        price=0,
        img = {}
    }
) => {
    const element = createCardElement({classModifier,title,description,img});
    const className = "card"
    const priceElement = document.createElement("p");
    priceElement.classList.add(`${className}__price`);
    priceElement.textContent = price;
    element.appendChild(priceElement);
    return element;
}
export const createCardList = ({ parent, listItems, elementCreatorFunction = createCardElement }) => {
    listItems.forEach((item, i = 0) => {
        console.log(item)
        const menuItemElement = elementCreatorFunction(item)
        console.log(menuItemElement)
        parent.appendChild(menuItemElement)
    });
}
