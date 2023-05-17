

let openPic = document.querySelectorAll(".element__image");
let closePic = document.querySelector(".image__pop-close");

let modalImage = document.querySelectorAll(".modal__image");



openPic.forEach(function(element, i){
    element.addEventListener("click", function () {
    modalImage[0].classList.toggle("modal__image-visible");
    console.log("se hizo click");
});
});



closePic.addEventListener("click", function(){
    modalImage[0].classList.toggle("modal__image-visible");
    console.log("se quiso cerrar");
});



/*
que el image__pop el src sea igual al nuevo */