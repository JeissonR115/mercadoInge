import { createMenuList,defaultMenuListItems} from '../menu.js';

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