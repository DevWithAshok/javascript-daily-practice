let addBtnElement = document.getElementById("addBtn");
let myCartitemsElements = document.getElementById("myCartitems");
let listElement = document.createElement("li");

function onAdd() {
    let valueElement = document.getElementById("cartItemTextInput");
    let valuesOfCartElement = valueElement.value;
    listElement.textContent = valuesOfCartElement;
    myCartitemsElements.appendChild(listElement);
}

addBtnElement.onclick = function() {
    onAdd();
};
