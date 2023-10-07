import { createHome } from "./homepage";
import "./styles.css"

const navbar = document.createElement("div");
const home = document.createElement("a");
const menu = document.createElement("a");
const contact = document.createElement("a");

home.innerText = "Home";
menu.innerText = "Menu";
contact.innerText = "Contact";
document.body.appendChild(navbar);
navbar.appendChild(home);
navbar.appendChild(menu);
navbar.appendChild(contact);





createHome();


