import { createHome } from "./homepage";
import { createMenu } from "./menu";
import { createContact } from "./contact";
import "./styles.css"

const divContent = document.querySelector("#content");
const navbar = document.createElement("div");
navbar.classList.add("nav");
const home = document.createElement("a");
const menu = document.createElement("a");
const contact = document.createElement("a");
const header = document.querySelector("#header");

navbar.style.cssText = "background-color: #333; overflow: hidden; padding: 20px 0; font-weight: bold;"
home.style.cssText = "color: #f2f2f2; text-align: center; padding: 14px 16px; text-decoration: none; font-size: 35px;"
menu.style.cssText = "margin-left: 10%; color: #f2f2f2; text-align: center; padding: 14px 16px; text-decoration: none; font-size: 35px;"
contact.style.cssText = "margin-left: 10%; color: #f2f2f2; text-align: center; padding: 14px 16px; text-decoration: none; font-size: 35px;"

home.innerText = "Home";
menu.innerText = "Menu";
contact.innerText = "Contact";
header.appendChild(navbar);
navbar.appendChild(home);
navbar.appendChild(menu);
navbar.appendChild(contact);



createHome();

home.addEventListener("click", () => {
    while(divContent.firstChild) {
        divContent.removeChild(divContent.lastChild);
    }

    createHome();
})

menu.addEventListener("click", () => {
    while(divContent.firstChild) {
        divContent.removeChild(divContent.lastChild);
    }

    createMenu();
})

contact.addEventListener("click", () => {
    while(divContent.firstChild) {
        divContent.removeChild(divContent.lastChild);
    }

    createContact();
})