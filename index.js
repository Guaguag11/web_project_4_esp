const editButton = document.querySelector(".profile__button-edit");
const saveButton = document.querySelector(".form__button");
const closeButton = document.querySelector(".form__button-close");

const form = document.querySelector(".edit");

const pageName = document.querySelector(".profile__info-name");
const profession = document.querySelector(".profile__info-tag");
const formName = document.querySelector(".form__info-name");
const formTag = document.querySelector(".form__info-tag");

const addButton = document.querySelector(".profile__button-add");
const saveAddButton = document.querySelector(".form__button-add");
const closeAddButton = document.querySelector(".form__button-add-close");

const formAdd = document.querySelector(".add");

const title = document.querySelector(".form__info-title");
const link = document.querySelector(".form__info-url");

const node = document.querySelector(".element");
const elements = document.querySelector(".elements");

const likeButton = document.querySelectorAll(".element__like");
const like = document.querySelectorAll(".element__like-active");

const deleteButton = document.querySelectorAll(".element__trash");

const card = document.querySelectorAll(".element");
const openPic = document.querySelectorAll(".element__image");
const trueName = document.querySelectorAll(".element__name");

const closePic = document.querySelector(".image__pop-close");

const modalImage = document.querySelector(".image");
const elementName = document.querySelector(".element");

const imageName = document.querySelector(".image__name");

const img = modalImage.querySelector(".image__pop-up");


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
addButton.addEventListener("click", function () {
    formAdd.classList.toggle("add-visible");
});

closeAddButton.addEventListener("click", function () {
    formAdd.classList.toggle("add-visible");
});

saveAddButton.addEventListener("click", function () {
    const nodeClonado = node.cloneNode(true);

    formAdd.classList.toggle("add-visible");

    const formTitle = nodeClonado.querySelector(".element__name");
    const formLink = nodeClonado.querySelector(".element__image");
//   TEXT CONTENT EL VALOR PARA ETIQUETAS DE TEXTO , VALUE PARA EL CONTENIDO DE INPUT
    formTitle.textContent =title.value
    formLink.src = link.value

    elements.insertBefore(nodeClonado, elements.firstChild);

    const formButtonLike = nodeClonado.querySelector(".element__like");
    const formTrash = nodeClonado.querySelector(".element__trash");
    const formLike = nodeClonado.querySelector(".element__like-active");
    const formPop = nodeClonado.querySelector(".element__image");
    const formName = nodeClonado.querySelector(".element__name");

    formButtonLike.addEventListener("click", function () {
        formLike.classList.toggle("element__like-active-visible");
    });
    formTrash.addEventListener("click", function () {
    nodeClonado.remove();
})

formPop.addEventListener("click", function () {
    modalImage.classList.toggle("image__visible");
    img.src = formPop.src;
    imageName.textContent = formName.textContent;
});
});



/* LIKE */
likeButton.forEach(function(element, i){
    element.addEventListener("click", function () {
    like[i].classList.toggle("element__like-active-visible");
});
});

/* TRASH */
deleteButton.forEach(function(element, i){
    element.addEventListener("click", function () {
    card[i].remove();
});
});

/* IMAGE POP */

openPic.forEach(function (element, i) {
    console.log(element); 
    element.addEventListener("click", function () {
    modalImage.classList.toggle("image__visible");

    img.src = element.src;
    imageName.textContent = trueName[i].textContent;
    console.log("se abrió ventana");
    });

});

closePic.addEventListener("click", function () {
    modalImage.classList.toggle("image__visible");
    console.log("se cerro la ventana");
});
