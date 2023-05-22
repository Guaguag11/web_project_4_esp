

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


