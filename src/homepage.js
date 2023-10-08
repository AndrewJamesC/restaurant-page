import harryImg from "./assets/harry.png"
import backgroundImg from "../src/assets/flatten.jpeg"

export const createHome = () => {
    const divContent = document.querySelector("#content");
    divContent.style.cssText = "width: 50vw;"
    const heading = document.createElement("h1");
    const homePara = document.createElement("p");
    const headerImg = new Image();
    
    document.body.style.backgroundImage = "url('../src/assets/flatten.jpeg')";

    headerImg.src = harryImg;
    headerImg.style.cssText = "height: auto; width: 12rem;"
    

    heading.textContent = "Harry's Hotdogs";
    homePara.innerText = "You're a wizard Harry! These hotdogs are amazing!!!"
    
    divContent.appendChild(heading); 
    divContent.appendChild(homePara);
    heading.prepend(headerImg);
   
    

}

