
let addButton = document.querySelector(".profile__button-add");
let saveAddButton = document.querySelector(".form__button-add");
let closeAddButton = document.querySelector(".form__button-add-close");

let formAdd = document.querySelector(".modal__form-add");

let title = document.querySelector(".form__info-title");
let link = document.querySelector(".form__info-url");

let formTitle = document.querySelector(".element__name-modal");
let formUrl = document.querySelector(".element__image-modal");


const node = document.querySelector(".modal__element");

/*SOS YA NO SE QUE HACER AQUI*/

addButton.addEventListener("click", function(){
    formAdd.classList.toggle("modal__form-add-visible");
});

closeAddButton.addEventListener("click", function(){
    formAdd.classList.toggle("modal__form-add-visible");
});

saveAddButton.addEventListener("click", function(){
    formAdd.classList.toggle("modal__form-add-visible");
    title.textContent = formTitle.value;
    link.textContent = formUrl.value;
    console.log("se quiso añadir algo");


})

/*
esto tengo que poner para que se agregue la url de los elements
document.querySelector src

documento de appen child
Elements.appenchild y el elemento nuevo 
*/

