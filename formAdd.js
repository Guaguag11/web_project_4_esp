
let addButton = document.querySelector(".profile__button-add");
let saveAddButton = document.querySelector(".form__button-add");
let closeAddButton = document.querySelector(".form__button-add-close");

let formAdd = document.querySelector(".modal__form-add");

let pageTitle = document.querySelector(".profile__info-title");
let link = document.querySelector(".profile__info-url");
let formTitle = document.querySelector(".element__name");
let formUrl = document.querySelector(".SOS");

/*SOS YA NO SE QUE HACER AQUI*/

addButton.addEventListener("click", function(){
    formAdd.classList.toggle("modal__form-add-visible");

});

closeAddButton.addEventListener("click", function(){
    formAdd.classList.toggle("modal__form-add-visible");
});

saveAddButton.addEventListener("click", function(){
    formAdd.classList.toggle("modal__form-add-visible");
})

