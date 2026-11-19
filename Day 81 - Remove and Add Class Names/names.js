let heading = document.getElementById("heading");
let btnEl = document.getElementById("btnEl");
btnEl.onclick = function() {
    heading.classList.remove("heading-old-styles");
    heading.classList.add("heading-new-styles");
};
