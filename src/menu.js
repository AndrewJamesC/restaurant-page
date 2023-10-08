import cokeImg from "./assets/coke.jpeg";
import spriteImg from "./assets/sprite.png";


export const createMenu = () => {
    const divContent = document.querySelector("#content");
    const menuHeading = document.createElement("h1");
    menuHeading.innerText = "Menu";
    const drinksHeading = document.createElement("h2");
    drinksHeading.innerText = "Drinks";
    const drinksContainer = document.createElement("div");
    drinksContainer.style.cssText = "border: 2px solid black;"
    const coke = document.createElement("h3");
    coke.innerText = "Coke";
    const cokeDescription = document.createElement("p");
    cokeDescription.innerText = "Enjoy a cool refresing glass of coke. With or without ice";
    const cokeGlass = new Image();
    cokeGlass.src = cokeImg;
    const sprite = document.createElement("h3");
    sprite.innerText = "Sprite";
    const spriteDescription = document.createElement("p");
    spriteDescription.innerText = "Enjoy a cool refresing glass of coke. With or without ice";
    const spriteGlass = new Image();
    spriteGlass.src = spriteImg;
    spriteGlass.style.cssText = "height: 130px; width: 130px;"

    divContent.appendChild(menuHeading);
    divContent.appendChild(drinksHeading);
    divContent.appendChild(drinksContainer);
    drinksContainer.appendChild(coke);
    drinksContainer.appendChild(cokeDescription);
    drinksContainer.appendChild(cokeGlass);
    drinksContainer.appendChild(sprite);
    drinksContainer.appendChild(spriteDescription);
    drinksContainer.appendChild(spriteGlass);
}