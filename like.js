

let likeButton = document.querySelector(".element__like");
let like = document.querySelector("modal__like");

likeButton.addEventListener("click", function(){
    like.classList.toggle("element__like-active");
});


