
let deleteButton = document.querySelectorAll(".element__trash");
let card = document.querySelectorAll(".element");

deleteButton.forEach(function(element, i){
    element.addEventListener("click", function () {
    card[i].remove();
});
});
