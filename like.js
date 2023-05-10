
let likeButton = document.querySelectorAll(".element__like");
let like = document.querySelectorAll(".element__like-active");

likeButton.forEach(function(element, i){
    element.addEventListener("click", function () {
    like[i].classList.toggle("element__like-active-visible");
});
});

