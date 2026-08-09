let profileDetails = {
    imgSrc: "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/user-profile-img.png",
    name: "RAHUL ATTULURI",
    age: 25
};

let imgElement = document.createElement("img");
imgElement.setAttribute("src", profileDetails.imgSrc);
let imgContainerElement = document.getElementById("imgContainer");
imgContainerElement.appendChild(imgElement);
let headingElement = document.createElement("h1");
headingElement.append(profileDetails.name);
let ageElement = document.createElement("p");
ageElement.append("Age : " + profileDetails.age);
let profileContainerElement = document.getElementById("profileContainer");
profileContainerElement.appendChild(headingElement);
profileContainerElement.appendChild(ageElement);
