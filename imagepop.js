let openPic = document.querySelectorAll(".element__image");
let closePic = document.querySelector(".image__pop-close");

let modalImage = document.querySelectorAll(".modal__image");

openPic.forEach(function (element, i) {
    console.log(element);
    element.addEventListener("click", function () {
    modalImage[0].classList.toggle("modal__image-visible");
    let img = modalImage[0].querySelector(".image__pop");
    img.src = element.src;
    console.log("se hizo click");
    });
});

closePic.addEventListener("click", function () {
    modalImage[0].classList.toggle("modal__image-visible");
    console.log("se cerro la ventana");
});
