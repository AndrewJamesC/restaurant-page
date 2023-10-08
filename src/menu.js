import cokeImg from "./assets/coke.jpeg";
import spriteImg from "./assets/sprite.png";
import plainHotdogImg from "./assets/originalHotdog.jpg"
import chilidogImg from "./assets/chiliDog.jpg"


export const createMenu = () => {
    const divContent = document.querySelector("#content");
    divContent.style.cssText = "width: 50vw;"
    const menuHeading = document.createElement("h1");
    menuHeading.innerText = "Menu";
    const hotdogsHeading = document.createElement("h2");
    hotdogsHeading.innerText = "Hotdogs";
    const hotdogsContainer = document.createElement("div");
    hotdogsContainer.style.cssText = "border: 2px solid black";
    const plainHotdog = document.createElement("h3");
    plainHotdog.innerText = "Original Hotdog";
    const plainHotdogDescription = document.createElement("p");
    plainHotdogDescription.innerText = "Our Classic Frankfurter starts with a top-quality all-beef frankfurter, expertly grilled to perfection which is nestled in a soft, lightly toasted bun. Customize it with your choice of traditional condiments such as ketchup, mustard, relish, and fresh, crispy onions.";
    const orginalHotdogImg = new Image();
    orginalHotdogImg.src = plainHotdogImg;
    orginalHotdogImg.style.cssText = "height: 130px;"
    const chiliDog = document.createElement("h3");
    chiliDog.innerText = "The Classic Chili Dog";
    const chiliDogDescription = document.createElement("p");
    chiliDogDescription.innerText = "We start with a plump, juicy beef frankfurter, gently nestled in a soft, warm bun. Then, we ladle on our rich and hearty homemade chili, made from a secret blend of spices and ground beef, simmered to perfection. To add a touch of freshness and contrast to the savory chili, we top it off with cool, crisp diced onions and a generous sprinkle of shredded cheddar cheese."
    const chilidogImage = new Image();
    chilidogImage.src = chilidogImg;
    chilidogImage.style.cssText = "height: 130px;"

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
    divContent.appendChild(hotdogsHeading);
    divContent.appendChild(hotdogsContainer);
    hotdogsContainer.appendChild(plainHotdog);
    hotdogsContainer.appendChild(plainHotdogDescription);
    hotdogsContainer.appendChild(orginalHotdogImg);
    hotdogsContainer.appendChild(chiliDog);
    hotdogsContainer.appendChild(chiliDogDescription);
    hotdogsContainer.appendChild(chilidogImage);

    divContent.appendChild(drinksHeading);
    divContent.appendChild(drinksContainer);
    drinksContainer.appendChild(coke);
    drinksContainer.appendChild(cokeDescription);
    drinksContainer.appendChild(cokeGlass);
    drinksContainer.appendChild(sprite);
    drinksContainer.appendChild(spriteDescription);
    drinksContainer.appendChild(spriteGlass);
}