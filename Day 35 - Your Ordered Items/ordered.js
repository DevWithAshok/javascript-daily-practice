let itemList = [{
        itemName: "Veg Biryani",
        uniqueNo: 1,
    },
    {
        itemName: "Chicken 65",
        uniqueNo: 2,
    },
    {
        itemName: "Paratha",
        uniqueNo: 3,
    } 
];

let itemListCount = itemList.length;

let containerElement = document.getElementById("orderedItemsContainer");
containerElement.classList.add("d-flex", "flex-column");
let headingElement = document.createElement("h1");
headingElement.textContent = "Your Ordered Items";
containerElement.appendChild(headingElement);
let ulContainerElement = document.createElement("ul");
ulContainerElement.classList.add("d-flex", "flex-column");

function ondeleteItem(itemId) {
    let itemElement = document.getElementById(itemId);
    ulContainerElement.removeChild(itemElement);

}

function createAndAppend(item) {
    let itemId = "item" + item.uniqueNo;
    let liId = "item" + item.uniqueNo;
    let buttonid = "item" + item.uniqueNo;


    let liElement = document.createElement("li");
    liElement.textContent = item.itemName;
    liElement.id = liId;
    ulContainerElement.appendChild(liElement);

    let buttonElement = document.createElement("button");
    buttonElement.textContent = "Cancel";
    buttonElement.classList.add("btn", "btn-danger");
    buttonElement.id = buttonid;
    buttonElement.onclick = function() {
        ondeleteItem(itemId);
    }
    ulContainerElement.appendChild(buttonElement);

    containerElement.appendChild(ulContainerElement);
}

for (let item of itemList) {
    createAndAppend(item);
}
