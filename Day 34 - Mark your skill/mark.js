let headingElement = document.createElement("h1");
headingElement.textContent = "Mark your Skills";
let skillsContainer = document.getElementById("skillsContainer");
skillsContainer.appendChild(headingElement);

let ulContainer = document.createElement("ul");

let skillList = [{
        skillName: "HTML",
        uniqueNo: 1,
    },
    {
        skillName: "CSS",
        uniqueNo: 2,
    },
    {
        skillName: "JavaScript",
        uniqueNo: 3,
    }
];

let skillListLength = skillList.length;

function onStatusChange(checkboxId, labelId) {
    let checkboxElement = document.getElementById(checkboxId);
    let labelElement = document.getElementById(labelId);
    labelElement.classList.toggle('checked');
}
let ultodo = document.createElement("ul");
skillsContainer.appendChild(ultodo);

function createAndAppendElement(todo) {
    let todoId = "todo" + todo.uniqueNo;
    let checkboxId = "checkbox" + todo.uniqueNo;
    let labelId = "label" + todo.uniqueNo;
    console.log(labelId);
    let todoElement = document.createElement("li");
    todoElement.classList.add("d-flex", "flex-row");
    todoElement.id = todoId;
    ultodo.appendChild(todoElement);
    let checkboxElement = document.createElement("input");
    checkboxElement.type = "checkbox";
    checkboxElement.id = checkboxId;
    checkboxElement.classList.add("checkbox-input");
    todoElement.appendChild(checkboxElement);
    checkboxElement.onclick = function() {
        onStatusChange(checkboxId, labelId);
    }

    let labelElement = document.createElement("label");
    labelElement.textContent = todo.skillName;
    labelElement.setAttribute("for", checkboxId);
    labelElement.id = labelId;
    todoElement.appendChild(labelElement);

}


for (let num of skillList) {
    createAndAppendElement(num);
}
