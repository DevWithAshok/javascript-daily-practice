let containerElement = document.getElementById("checkBoxWithLabelContainer");
containerElement.classList.add("d-flex", "flex-row");
let chechboxElement = document.createElement("input");
chechboxElement.type = "checkbox";
chechboxElement.id = "checkbox";
containerElement.appendChild(chechboxElement);
let labelElement = document.createElement("label");
labelElement.id = "checkboxLabel";
labelElement.setAttribute("for", "checkbox");
labelElement.textContent = "I am a label";
containerElement.appendChild(labelElement);

function statusChange() {

    labelElement.classList.toggle('checked');

}

chechboxElement.onclick = function() {
    statusChange();
}
