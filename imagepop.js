

let openPic = document.querySelectorAll(".element__image");
let closePic = document.querySelectorAll(".image__pop-close");

let modalImage = document.querySelectorAll(".modal__image");



/*TENGO QUE HACER ESTO OTRA VEZ*/

openPic.forEach(function(element, i){
    element.addEventListener("click", function () {
    modalImage[i].classList.toggle("modal__image-visble");
    console.log("se hizo click");
});
});




closePic.addEventListener("click", function(){
    modalImage.classList.toggle("modal__image-visble");
    console.log("se quiso cerrar");
});


/* en el close, no registra ni siquiera el click que hago */