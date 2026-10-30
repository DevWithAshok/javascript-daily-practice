let petsImageUrls = {
    dog: "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/select-your-pet-dog-img.png",
    cat: "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/select-your-pet-cat-img.png",
    parrot: "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/select-your-pet-parrot-img.png",
    spider: "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/select-your-pet-spider-img.png",
    rabbit: "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/select-your-pet-rabbit-img.png"
};
let petImg = document.getElementById("petImg");
petImg.src = petsImageUrls.dog;
let petSelect = document.getElementById("petSelect");
petSelect.addEventListener("change", function(event) {
    if (event.target.value === petSelect.value) {
        // console.log(petSelect.value);
        petImg.src = petsImageUrls[petSelect.value];
    }

});
petImg.style.height = "200px";
