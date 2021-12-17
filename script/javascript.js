function closeMenu(){
    window.innerWidth >= 992 ? btn_menu.style.display = "none": btn_menu.style.display = "initial"

    menuContent.classList.add("menuContent")
    menuContent.classList.remove("openMenuContent")
    menuItems.classList.remove("openMenuItens")
    button.classList.remove("openButton")
}

function openMenu(){
    btn_menu.style.display = "none"

    menuContent.classList.add("openMenuContent")
    menuContent.classList.remove("menuContent")
    menuItems.classList.add("openMenuItens")
    button.classList.add("openButton")
}

window.addEventListener("resize", () => window.innerWidth >= 992 ? closeMenu(): btn_menu.style.display = "initial")

var btn_menu = document.getElementsByClassName("menu")[0]
var btn_closeMenu = document.getElementById("closeChkMenu")

var menuContent = document.getElementById("menuContent")
var menuItems = document.getElementsByClassName("menuItens")[0]
var button = document.getElementsByClassName("button")[0]

btn_menu.addEventListener("click", openMenu)
btn_closeMenu.addEventListener("click", closeMenu)