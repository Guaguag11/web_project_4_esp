export const cardContent = document.querySelector(".elements");
export const initialCards = [
    {
    name: "Valle de Yosemite",
    link: "https://images.unsplash.com/photo-1492305175278-3b3afaa2f31f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1431&q=80"
    },
    {
    name: "Lago Louise",
    link: "https://images.unsplash.com/photo-1575471366705-ceb08288cc65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=816&q=80"
    },
    {
    name: "Montañas Calvas",
    link: "https://images.unsplash.com/photo-1513398200893-5b194f3e9fc1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    },
    {
    name: "el Gran Cañón",
    link: "https://images.unsplash.com/photo-1575527048208-6475b441e0a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
    },
    {
    name: "Las Vegas, Nevada",
    link: "https://images.unsplash.com/photo-1636313857176-c89777bacacd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
    },
    {
    name: "Arizona",
    link: "https://images.unsplash.com/photo-1575408264798-b50b252663e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1353&q=80"
    }
];


export const editButton = document.querySelector(".profile__button-edit");
export const saveButton = document.querySelector(".form__button");
export const closeButton = document.querySelector(".form__button-close");

export const formEdit = document.querySelector(".edit");
export const pageName = document.querySelector(".profile__info-name");
export const profession = document.querySelector(".profile__info-tag");
export const formName = document.querySelector(".form__info-name");
export const formTag = document.querySelector(".form__info-tag");

export const addButton = document.querySelector(".profile__button-add");
export const saveAddButton = document.querySelector(".form__button-add");
export const closeAddButton = document.querySelector(".form__button-add-close");

export const formAdd = document.querySelector(".add");
export const title = document.querySelector(".form__info-title");
export const link = document.querySelector(".form__info-url");

export const node = document.querySelector(".template");
export const elements = document.querySelector(".elements");

//export const likeButton = document.querySelectorAll(".element__like");
//export const like = document.querySelectorAll(".element__like-active");
export const deleteButton = document.querySelectorAll(".element__trash");
export const openPic = document.querySelectorAll(".element__image");
export const trueName = document.querySelectorAll(".element__name");
export const closePic = document.querySelector(".image__pop-close");
export const modalImage = document.querySelector(".image");
export const imageName = document.querySelector(".image__name");
export const img = modalImage.querySelector(".image__pop-up");


export const formEditado = document.querySelector(".form-edit");
export const firstInputEdit = formEditado.querySelector(".form__info-name");
export const firstSpanEdit = formEditado.querySelector(".form__input-error-name");
export const secondInputEdit = formEditado.querySelector(".form__info-tag");
export const secondSpanEdit = formEditado.querySelector(".form__input-error-tag");
export const buttonEdit = formEditado.querySelector(".form__button");

export const formAgregar = document.querySelector(".form-add");
export const firstInputAdd = formAgregar.querySelector(".form__info-title");
export const firstSpanAdd = formAgregar.querySelector(".form__input-error-title");
export const secondInputAdd = formAgregar.querySelector(".form__info-url");
export const secondSpanAdd = formAgregar.querySelector(".form__input-error-link");
export const buttonAdd = formAgregar.querySelector(".form__button-add");

editButton.addEventListener("click", function(){
    formEdit.classList.toggle("edit-visible");
    formName.value = pageName.textContent;
    formTag.value = profession.textContent;
});

closeButton.addEventListener("click", function(evt){
    formEdit.classList.toggle("edit-visible");
});

saveButton.addEventListener("click", function(evt){
    formEdit.classList.toggle("edit-visible");
    pageName.textContent = formName.value;
    profession.textContent = formTag.value;
})

/*FORM ADD */  
addButton.addEventListener("click", function () {
    formAdd.classList.toggle("add-visible");
});

closeAddButton.addEventListener("click", function (evt) {
    formAdd.classList.toggle("add-visible");
});

saveAddButton.addEventListener("click", function (evt) {
    const nodeClonado = node.content.querySelector(".element").cloneNode(true);
    formAdd.classList.toggle("add-visible");

    const formTitle = nodeClonado.querySelector(".element__name");
    const formLink = nodeClonado.querySelector(".element__image");
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

/*cerrar con escape */
document.addEventListener("keydown", function (evt){
    if(evt.key === "Escape" && formEdit.classList.contains("edit-visible") ){
        formEdit.classList.remove("edit-visible");
    } else if(evt.key === "Escape" && formAdd.classList.contains("add-visible")){
        formAdd.classList.remove("add-visible");
    } else if(evt.key === "Escape" && modalImage.classList.contains("image__visible")){
        modalImage.classList.remove("image__visible");
    }
});


closePic.addEventListener("click", function () {
    modalImage.classList.toggle("image__visible");
});


/*quitar con click fuera de imagen o form */

modalImage.addEventListener("click", function (evt) {
    if (evt.target === modalImage ){
        modalImage.classList.toggle("image__visible");
    }
});

formAdd.addEventListener("click", function (evt) {
    if (evt.target === formAdd ){
        formAdd.classList.toggle("add-visible");
    }
});

formEdit.addEventListener("click", function (evt) {
    if (evt.target === formEdit ){
        formEdit.classList.toggle("edit-visible");
    }
});

