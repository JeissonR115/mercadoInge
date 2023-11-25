import { createMenuList,defaultMenuListItems} from '../menu.js';

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