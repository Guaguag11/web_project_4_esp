

let editButton = document.querySelector(".profile__button-edit");
let saveButton = document.querySelector(".form__button");
let closeButton = document.querySelector(".form__button-close");

let form = document.querySelector(".edit");

let pageName = document.querySelector(".profile__info-name");
let profession = document.querySelector(".profile__info-tag");
let formName = document.querySelector(".form__info-name");
let formTag = document.querySelector(".form__info-tag");



editButton.addEventListener("click", function(){
    form.classList.toggle("edit-visible");
    formName.value = pageName.textContent;
    formTag.value = profession.textContent;
});

closeButton.addEventListener("click", function(){
    form.classList.toggle("edit-visible");
});

saveButton.addEventListener("click", function(){
    form.classList.toggle("edit-visible");
    pageName.textContent = formName.value;
    profession.textContent = formTag.value;
})

/*FORM ADD */

let addButton = document.querySelector(".profile__button-add");
let saveAddButton = document.querySelector(".form__button-add");
let closeAddButton = document.querySelector(".form__button-add-close");

let formAdd = document.querySelector(".add");

let title = document.querySelector(".form__info-title");
let link = document.querySelector(".form__info-url");

const node = document.querySelector(".element");

let elements = document.querySelector(".elements");


addButton.addEventListener("click", function () {
    formAdd.classList.toggle("add-visible");
});

closeAddButton.addEventListener("click", function () {
    formAdd.classList.toggle("add-visible");
});

saveAddButton.addEventListener("click", function () {
    let nodeClonado = node.cloneNode(true);

    formAdd.classList.toggle("add-visible");

    let formTitle = nodeClonado.querySelector(".element__name");
    let formLink = nodeClonado.querySelector(".element__image");
//   TEXT CONTENT EL VALOR PARA ETIQUETAS DE TEXTO , VALUE PARA EL CONTENIDO DE INPUT
    formTitle.textContent =title.value
    formLink.src = link.value

    elements.insertBefore(nodeClonado, elements.firstChild);

    let formButtonLike = nodeClonado.querySelector(".element__like");
    let formTrash = nodeClonado.querySelector(".element__trash");
    let formLike = nodeClonado.querySelector(".element__like-active");
    let formPop = nodeClonado.querySelector(".element__image");
    let imagen = nodeClonado.querySelector(".image");

    formButtonLike.addEventListener("click", function () {
        formLike.classList.toggle("element__like-active-visible");
    });
    formTrash.addEventListener("click", function () {
    nodeClonado.remove();



})});


/* LIKE */

let likeButton = document.querySelectorAll(".element__like");
let like = document.querySelectorAll(".element__like-active");

likeButton.forEach(function(element, i){
    element.addEventListener("click", function () {
    like[i].classList.toggle("element__like-active-visible");
});
});


/* TRASH */


let deleteButton = document.querySelectorAll(".element__trash");
let card = document.querySelectorAll(".element");

deleteButton.forEach(function(element, i){
    element.addEventListener("click", function () {
    card[i].remove();
});
});


/* IMAGE POP */

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
    });

});

/* aqui solo agarra el nombre del primer elemento */

closePic.addEventListener("click", function () {
    modalImage[0].classList.toggle("image__visible");
    console.log("se cerro la ventana");
});
