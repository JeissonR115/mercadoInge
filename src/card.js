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
export const createCardList = ({ parent, listItems }) => {
    listItems.forEach((item, i = 0) => {
        const menuItemElement = createCardElement({
            classModifier: item.classModifier,
            title:item.title,
            description:item.description,
            img:{href:item.img.href,alt:item.img.alt}
        })
        parent.appendChild(menuItemElement)
    });
}