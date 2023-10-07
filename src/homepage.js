export const createHome = () => {
    const divContent = document.querySelector("#content");
    const header = document.createElement("h1");
    header.textContent = "Soprano";
    divContent.appendChild(header);
}
