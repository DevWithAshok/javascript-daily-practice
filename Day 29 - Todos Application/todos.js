/* Follow the instructions found in the description to complete the JavaScript functionality.*/
let todoItemsContainerElement = document.getElementById("todoItemsContainer");
let todoList = [{
        text: "Learn HTML"
    },
    {
        text: "Learn CSS"
    },
    {
        text: "Learn JavaScript"
    }
];

function createAndAppendTodo(todo) {
    let todoElement = document.createElement("li");
    todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
    todoItemsContainerElement.appendChild(todoElement);

    let checkBoxElement = document.createElement("input");
    checkBoxElement.id = "checkboxInput";
    checkBoxElement.setAttribute("type", "checkbox");
    checkBoxElement.classList.add("checkbox-input");
    todoElement.appendChild(checkBoxElement);

    let labelContainer = document.createElement("div");
    labelContainer.classList.add("d-flex", "flex-row", "label-container");
    todoElement.appendChild(labelContainer);

    let labelElement = document.createElement("label");
    labelElement.classList.add("checkbox-label");
    labelElement.textContent = todo.text;
    labelContainer.appendChild(labelElement);

    let deleteContainer = document.createElement("div");
    deleteContainer.classList.add("delete-icon-container");
    labelContainer.appendChild(deleteContainer);

    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("fas", "fa-trash-alt", "delete-icon");
    deleteContainer.appendChild(deleteIcon);
}

for (let eachTodo of todoList) {
    createAndAppendTodo(eachTodo);
}
