let groceryList = ["Apples", "Boost Drink", "Butterscotch Ice Cream", "Tomato Ketchup", "Dairy Milk Chocolates", "Pasta"];

let containerElement = document.getElementById("groceryListContainer");
containerElement.classList.add("d-flex", "flex-column", "justify-content-start", );
containerElement.style.padding = "30px";
let headingElement = document.createElement("h1");
headingElement.textContent = "Grocery List";
headingElement.style.fontFamily = "Roboto";
headingElement.style.textAlign = "center";
containerElement.style.backgroundColor = "#03254c";
containerElement.style.height = "100vh";
headingElement.style.color = "#ffffff";
headingElement.style.padding = "10px";
containerElement.appendChild(headingElement);


let ulContainerElement = document.createElement("div");
containerElement.appendChild(ulContainerElement);
let ullistElement = document.createElement("ul");
ulContainerElement.appendChild(ullistElement);
for (let i in groceryList) {
    let liElement = document.createElement("li");
    liElement.textContent = groceryList[i];
    liElement.style.color = "#000000";
    ullistElement.appendChild(liElement);
}
ulContainerElement.style.backgroundColor = "#f5f9fd";
ulContainerElement.style.borderRadius = "10px";
ulContainerElement.style.width = "320px";
ulContainerElement.style.paddingTop = "15px";
ulContainerElement.style.paddingLeft = "8px";
ulContainerElement.classList.add("d-flex", "flex-row", "justify-content-start");
