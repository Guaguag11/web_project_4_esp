let openPic = document.querySelectorAll(".element__image");
let closePic = document.querySelector(".image__pop-close");

let modalImage = document.querySelectorAll(".image");
let elementName = document.querySelector(".element");


openPic.forEach(function (element, i) {
    console.log(element);
    element.addEventListener("click", function () {
    modalImage[0].classList.toggle("image__visible");

    let img = modalImage[0].querySelector(".image__pop-up");
    img.src = element.src;

    let name = modalImage[0].querySelector(".image__name");
    let namePop = document.querySelector(".element__name");
    console.log(namePop);
    name.textContent = namePop.textContent ;
    });
});

/* aqui solo agarra el nombre del primer elemento */

closePic.addEventListener("click", function () {
    modalImage[0].classList.toggle("image__visible");
    console.log("se cerro la ventana");
});
