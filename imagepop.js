

let openPic = document.querySelectorAll(".element__image");
let closePic = document.querySelector(".image__pop-close");

let modalImage = document.querySelectorAll(".modal__image");



openPic.forEach(function(element, i){
    element.addEventListener("click", function () {
    modalImage[0].classList.toggle("modal__image-visible");
    /*aqui tengo que poner que la imagen que se abra la agarre de 
    src del image del element al que le piqué*/
    console.log("se hizo click");
});
});


closePic.addEventListener("click", function(){
    modalImage[0].classList.toggle("modal__image-visible");
    console.log("se cerro la ventana");
});



/*
que el image__pop el src sea igual al nuevo */