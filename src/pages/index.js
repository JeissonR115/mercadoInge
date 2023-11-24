import { createCardList } from '../card.js';
import { createMenuList,defaultMenuListItems} from '../menu.js';

const response = await fetch("https://raw.githubusercontent.com/JeissonR115/mercadoInge/main/info.json");
const data = await response.json();
const summaryListElement = document.querySelector(".team__list");
const summaryItems = data["members__list"];
createCardList({ parent: summaryListElement, listItems: summaryItems })

const menuList = [
    {
        classModifier: "project",
        href: "./#proyect",
        value: "Proyecto"
    },
    {
        classModifier: "team",
        href: "./#team",
        value: "Nosotros"
    },
    {
        classModifier:"login",
        href: "./pages/login.html",
        value: "Login"
    }
];

createMenuList({listItems:[...defaultMenuListItems, ...menuList]})
