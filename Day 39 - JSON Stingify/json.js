let bikes = ["Hero", "Honda", "Bajaj", "Suzuki", "Yamaha"];
let person = {
    name: "Rahul",
    age: 25,
    gender: "Male",
};
let todos = [{
        todo: "Attending CCBP sessions",
        todoStatus: "Completed",
    },
    {
        todo: "Completing practice sets",
        todoStatus: "Not Completed",
    },
    {
        todo: "Asking doubts",
        todoStatus: "Completed",
    },
];

let jsonContainer = document.getElementById("jsonContainer");
let bikesContainer = document.createElement("div");
let personContainer = document.createElement("div");
let todosContainer = document.createElement("div");
bikesContainer.textContent = JSON.stringify(bikes);
bikesContainer.classList.add("child-container");
personContainer.classList.add("child-container");
todosContainer.classList.add("child-container");
personContainer.textContent = JSON.stringify(person);
todosContainer.textContent = JSON.stringify(todos);
jsonContainer.appendChild(bikesContainer);
jsonContainer.appendChild(personContainer);
jsonContainer.appendChild(todosContainer);
