import phoneIconImg from "../src/assets/phone.png"
import twitIMg from "./assets/twitter.png"

export const createContact = () => {
    const divContentId = document.querySelector("#content");
    divContentId.style.cssText = "width: 50vw;";
    const contactHeading = document.createElement("h1");
    contactHeading.innerText = "Contact Us";
    const contactContainer = document.createElement("div");
    const contactSubHeading = document.createElement("h2");
    contactSubHeading.innerText = "We’d love to hear from you, whether a complaint or a compliment. Get in touch now."
    const contactInfoContainer = document.createElement("div");
    contactInfoContainer.style.cssText = "display: flex;";
    const contactLeftContainer = document.createElement("div");
    contactLeftContainer.style.cssText = "display: flex; flex-direction: column; border: 2px solid black; width: 50%";
    const leftHeaderContainer =document.createElement("div");
    const leftHeader = document.createElement("h2");
    leftHeader.innerText = "Call Us";
    const contactIconContainer = document.createElement("div");
    contactIconContainer.style.cssText = "display: flex;"
    const phIcon = new Image();
    phIcon.src = phoneIconImg;
    phIcon.style.cssText = "height: 3rem;"
    const phNumber = document.createElement("p");
    phNumber.innerText = "566 - 1234567";
    const contactRightContainer = document.createElement("div");
    contactRightContainer.style.cssText = "display: flex; flex-direction: column; border: 2px solid black; width: 50%;"
    const rightHeader = document.createElement("h2");
    rightHeader.textContent = "Social";
    const twitterContainer = document.createElement("div");
    twitterContainer.style.cssText = "display: flex;"
    const twitterImg = new Image();
    twitterImg.src = twitIMg;
    twitterImg.style.cssText = "height: 3rem;"
    const twitterHandle  = document.createElement("p");
    twitterHandle.innerHTML = "<a href = 'https://twitter.com/'>Twitter</a>"
    const fbContainer = document.createElement("div");
    const igContainer = document.createElement("div");

   
    
    


    divContentId.appendChild(contactHeading);
    divContentId.appendChild(contactContainer);
    contactContainer.appendChild(contactSubHeading);
    contactContainer.appendChild(contactInfoContainer);
    contactInfoContainer.appendChild(contactLeftContainer);
    contactLeftContainer.appendChild(leftHeaderContainer);
    leftHeaderContainer.appendChild(leftHeader);
    contactLeftContainer.appendChild(contactIconContainer);
    contactIconContainer.appendChild(phIcon);
    contactIconContainer.appendChild(phNumber);
    contactInfoContainer.appendChild(contactRightContainer);
    contactRightContainer.appendChild(rightHeader);
    contactRightContainer.appendChild(twitterContainer);
    contactRightContainer.appendChild(fbContainer);
    contactRightContainer.appendChild(igContainer);
    twitterContainer.appendChild(twitterImg);
    twitterContainer.appendChild(twitterHandle);
}