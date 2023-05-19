let addButton = document.querySelector(".profile__button-add");
let saveAddButton = document.querySelector(".form__button-add");
let closeAddButton = document.querySelector(".form__button-add-close");

let formAdd = document.querySelector(".modal__form-add");

let title = document.querySelector(".form__info-title");
let link = document.querySelector(".form__info-url");


const node = document.querySelector(".element");

let elements = document.querySelector(".elements");

/*SOS YA NO SE QUE HACER AQUI*/

addButton.addEventListener("click", function () {
    formAdd.classList.toggle("modal__form-add-visible");
});

closeAddButton.addEventListener("click", function () {
    formAdd.classList.toggle("modal__form-add-visible");
});

saveAddButton.addEventListener("click", function () {
    let nodeClonado = node.cloneNode(true);

    formAdd.classList.toggle("modal__form-add-visible");

    let formTitle = nodeClonado.querySelector(".element__name");
    let formLink = nodeClonado.querySelector(".element__image");
//   TEXT CONTENT EL VALOR PARA ETIQUETAS DE TEXTO , VALUE PARA EL CONTENIDO DE INPUT
    formTitle.textContent =title.value
    formLink.src = link.value

    elements.insertBefore(nodeClonado, elements.firstChild);
});


