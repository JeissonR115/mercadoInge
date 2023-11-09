const menuList = document.querySelector(".menu__list")
const iconoMenu = document.querySelector(".menu__icon");

iconoMenu.addEventListener("click", function () {
    menuList.classList.toggle("visible");
    menuList.classList.toggle("no-visible");
    if (menuList.classList.contains("no-visible")) {
        setTimeout(() => {
            menuList.style.display = "none"
        }, 250)
    } else {
        menuList.style.display = "flex"
    }


});
