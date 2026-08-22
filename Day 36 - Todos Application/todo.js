let todoItemsContainer = document.getElementById("todoItemsContainer");
let addTodoButton = document.getElementById("addTodoButton");

let todoList = [{
        text: "Learn HTML",
        uniqueNo: 1
    },
    {
        text: "Learn CSS",
        uniqueNo: 2
    },
    {
        text: "Learn JavaScript",
        uniqueNo: 3
    }
];

let todoCount = todoList.length;

function onTodoChange(todoId, labelId) {
    let todoElement
    let labelEle = document.getElementById(labelId);
    labelEle.classList.toggle("checked");
}

function createAndAppendTodo(todo) {
    let todoId = "todo" + todo.uniqueNo;
    let inputElementId = "checkbox" + todo.uniqueNo;
    let labelId = "label" + todo.uniqueNo;

    let todoElement = document.createElement("li");
    todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
    todoItemsContainer.appendChild(todoElement);
    todoItemsContainer.id = todoId;


    let inputElement = document.createElement("input");
    inputElement.type = "checkbox";
    inputElement.id = inputElementId; //"checkboxInput";
    inputElement.classList.add("checkbox-input");
    inputElement.onclick = function() {
        onTodoChange(inputElementId, labelId);
    };
    todoElement.appendChild(inputElement);

    let labelContainer = document.createElement("div");
    labelContainer.classList.add("label-container", "d-flex", "flex-row");
    labelContainer.id = labelId;
    todoElement.appendChild(labelContainer);

    let labelElement = document.createElement("label");
    labelElement.setAttribute("for", inputElementId);
    labelElement.classList.add("checkbox-label");
    labelElement.textContent = todo.text;
    labelContainer.appendChild(labelElement);

    let deleteIconContainer = document.createElement("div");
    deleteIconContainer.classList.add("delete-icon-container");
    labelContainer.appendChild(deleteIconContainer);

    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");
    deleteIconContainer.appendChild(deleteIcon);


}


function onAddTodo() {
    let userinputElement = document.getElementById("todoUserInput");
    let userInputValue = userinputElement.value;
    if (userInputValue === "") {
        alert("Enter a valid Input");
        return;
    }

    todoCount += 1;

    let newtodo = {
        text: userInputValue,
        uniqueNo: todoCount
    };

    createAndAppendTodo(newtodo);
    userinputElement.value = "";

}
addTodoButton.onclick = function() {
    onAddTodo();
};

for (let todo of todoList) {
    createAndAppendTodo(todo);
}
