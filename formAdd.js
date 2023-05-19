
let addButton = document.querySelector(".profile__button-add");
let saveAddButton = document.querySelector(".form__button-add");
let closeAddButton = document.querySelector(".form__button-add-close");

let formAdd = document.querySelector(".modal__form-add");

let title = document.querySelector(".form__info-title");
let link = document.querySelector(".form__info-url");

let formTitle = document.querySelector(".element__name-modal");
let formUrl = document.querySelector(".element__image-modal");


const node = document.querySelector(".modal__element");

let elements = document.querySelector(".elements")

/*SOS YA NO SE QUE HACER AQUI*/

addButton.addEventListener("click", function(){
    formAdd.classList.toggle("modal__form-add-visible");
});

closeAddButton.addEventListener("click", function(){
    formAdd.classList.toggle("modal__form-add-visible");
});

saveAddButton.addEventListener("click", function(){
    formAdd.classList.toggle("modal__form-add-visible");
    console.log("se quiso añadir algo");

    title.textContent = formTitle.value;
    link.textContent = formUrl.value;

    elements.appendChild(node);
});

/*dudas
primero tengo que guardar para que se aparezca lo que escribi en el form
al mismo tiempo tengo que hacer que mi element nuevo sea visible con la nueva info
y que se recorran los demás

una cosa es que se haga visible el form
la otra cosa es que se haga visible mi element nuevo

})

/*
esto tengo que poner para que se agregue la url de los elements
document.querySelector src

documento de appen child
Elements.appenchild y el elemento nuevo 
*/ 
