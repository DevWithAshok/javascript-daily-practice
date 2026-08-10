let recipeObj = {
    title: "Tomato Pasta",
    imgSrc: "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/recipe-img.png",
    ingredients: ["Pasta", "Oil", "Onions", "Salt", "Tomato Pasta Sauce", "Cheese"]
};

let headingElement = document.getElementById("mainHeading");
headingElement.textContent = recipeObj.title;
let imgElement = document.getElementById("imgContainer");
imgElement.setAttribute("src", recipeObj.imgSrc);
let ulElement = document.getElementById("listContainer");
for (let liElement in recipeObj.ingredients) {
    let listElement = document.createElement("li");
    let value = (recipeObj.ingredients[liElement]);
    listElement.textContent = (value);
    ulElement.append(listElement);
}
