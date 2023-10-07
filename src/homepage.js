import hotdogImage from "./assets/hotdog.png";


export const createHome = () => {
    const divContent = document.querySelector("#content");
    const header = document.createElement("h1");
    const homePara = document.createElement("p");
    header.textContent = "Harry's Hotdogs";
    homePara.innerText = "You're a wizard Harry! These hotdogs are amazing!!!"
    divContent.appendChild(header); 
    divContent.appendChild(homePara);
    const hotdogImg = new Image();
    hotdogImg.src = hotdogImage;
    divContent.appendChild(hotdogImg);
    

}

