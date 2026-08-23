let movieElement = document.getElementById("movieReviewsContainer");
let h1Element = document.createElement("h1");
h1Element.textContent = "Movie Reviews";
h1Element.style.textAlign = "Center";
movieElement.appendChild(h1Element);


let labelElement = document.createElement("label");
labelElement.textContent = "MOVIE TITLE";
movieElement.appendChild(labelElement);

let titleInput = document.createElement("input");
titleInput.type = "text";
titleInput.id = "titleInput";
movieElement.appendChild(titleInput);

let h5reviewElement = document.createElement("h5");
h5reviewElement.textContent = "YOUR REVIEW";
movieElement.appendChild(h5reviewElement);

let reviewTextarea = document.createElement("textarea");
reviewTextarea.rows = 5;
reviewTextarea.cols = 55;
reviewTextarea.style.height = "100px";
reviewTextarea.id = "reviewTextarea";
movieElement.appendChild(reviewTextarea);

let addBtn = document.createElement("button");
addBtn.textContent = "Add";
addBtn.id = "addBtn";
addBtn.classList.add("btn", "btn-primary");
const reviewsContainer = document.getElementById("reviewsContainer");
addBtn.onclick = function() {
    let storeValue = document.getElementById("reviewTextarea");
    let storeTitle = document.getElementById("titleInput");
    let containerTitle = document.createElement("h1");
    containerTitle.textContent = "MOVIE TITLE:" + storeTitle.value;
    let containerReview = document.createElement("p");
    containerReview.textContent = ("Review:" + storeValue.value);
    console.log(containerTitle);
    reviewsContainer.appendChild(containerTitle);
    reviewsContainer.appendChild(containerReview);
    titleInput.value = "";
    reviewTextarea.value = "";
};
movieElement.appendChild(addBtn);
