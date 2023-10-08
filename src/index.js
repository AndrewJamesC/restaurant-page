import { createHome } from "./homepage";
import "./styles.css"

const navbar = document.createElement("div");
navbar.classList.add("nav");
const home = document.createElement("a");
const menu = document.createElement("a");
const contact = document.createElement("a");
const divContent = document.querySelector("#content");
navbar.style.cssText = "background-color: #333; overflow: hidden;"
home.style.cssText = "float: left; color: #f2f2f2; text-align: center; padding: 14px 16px; text-decoration: none; font-size: 17px;"
menu.style.cssText = "float: left; color: #f2f2f2; text-align: center; padding: 14px 16px; text-decoration: none; font-size: 17px;"
contact.style.cssText = "float: left; color: #f2f2f2; text-align: center; padding: 14px 16px; text-decoration: none; font-size: 17px;"

home.innerText = "Home";
menu.innerText = "Menu";
contact.innerText = "Contact";
divContent.prepend(navbar);
navbar.appendChild(home);
navbar.appendChild(menu);
navbar.appendChild(contact);






createHome();

