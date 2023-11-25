import { createMenuList,defaultMenuListItems} from '../menu.js';
import { createCardList,createProductCardElement } from '../card.js';
const response = await fetch("https://raw.githubusercontent.com/JeissonR115/mercadoInge/main/info.json");
const data = await response.json();
const productListElement = document.querySelector(".product__list");
const products = data["productos"];
createCardList({ parent: productListElement, listItems: products, elementCreatorFunction: createProductCardElement})

const menuList = [
    {
        classModifier: "products",
        href: "/pages/products.html",
        value: "Productos"
    },
    {
        classModifier: "carrito",
        href: "/pages/shoppingCart.html",
        value: "Carrito"
    }
];
createMenuList({listItems:[...defaultMenuListItems, ...menuList]})