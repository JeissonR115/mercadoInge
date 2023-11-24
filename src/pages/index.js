import { createCardList} from '../card.js'
const response = await fetch("https://raw.githubusercontent.com/JeissonR115/mercadoInge/main/info.json");
const data = await response.json();

const summaryListElement = document.querySelector(".team__list");
const summaryItems = data["members__list"];
createCardList({parent: summaryListElement, listItems:summaryItems})
