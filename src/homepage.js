import harryImg from "./assets/harry.png"

export const createHome = () => {
    const divContent = document.querySelector("#content");
    const heading = document.createElement("h1");
    const homePara = document.createElement("p");
    const headerImg = new Image();
    headerImg.src = harryImg;
    headerImg.style.cssText = "height: auto; width: 10rem;"
    

    heading.textContent = "Harry's Hotdogs";
    homePara.innerText = "You're a wizard Harry! These hotdogs are amazing!!!"
    divContent.appendChild(headerImg);
    divContent.appendChild(heading); 
    divContent.appendChild(homePara);
   
   
    

}

