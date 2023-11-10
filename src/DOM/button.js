export const createButton = ({ classModifier = "", href = "#", value }) => {
    const buttonContainerElement = document.createElement("span");
    const buttonElement = document.createElement("a");
    const className = "button"

    buttonContainerElement.classList.add(`${className}__container`);
    buttonElement.classList.add(className);
    buttonElement.classList.add(`${className}--${classModifier}`);
    buttonElement.href = href;

    const svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const rectElement = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rectElement.setAttribute("x", 0);
    rectElement.setAttribute("y", 0);
    rectElement.setAttribute("fill", "none");
    rectElement.setAttribute("width", "100%");
    rectElement.setAttribute("height", "100%");

    svgElement.appendChild(rectElement);
    buttonElement.appendChild(svgElement);
    buttonElement.appendChild(document.createTextNode(value));
    buttonContainerElement.appendChild(buttonElement);
    return buttonContainerElement;
}
