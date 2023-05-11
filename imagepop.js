

let openPic = document.querySelectorAll(".element__image");
let closePic = document.querySelectorAll(".image__pop-close");
let placeImage = document.querySelectorAll(".image");
let image = document.querySelectorAll(".image__pop-up");




closePic.forEach(function(element, i){
    element.addEventListener("click", function () {
    placeImage[i].classList.toggle("image__pop-up");
    console.log("se hizo click");
});
});

/*TENGO QUE HACER ESTO OTRA VEZ*/




