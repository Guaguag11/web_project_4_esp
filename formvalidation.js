const formularios = document.querySelectorAll(".form");
const firstInputEdit = formularios[0].querySelector(".form__info-name");
const firstSpanEdit = formularios[0].querySelector(".error__info-name");
const secondInputEdit = formularios[0].querySelector(".form__info-tag");
const secondSpanEdit = formularios[0].querySelector(".error__info-tag");
const buttonEdit = formularios[0].querySelector(".form__button");

firstInputEdit.addEventListener("input", function(){
    if (!firstInputEdit.validity.valid) {
        buttonEdit.classList.add("form__button_inactive");
        firstSpanEdit.classList.add("input__error-active");
        firstSpanEdit.textContent = firstInputEdit.validationMessage;
        buttonEdit.disabled = true;
    }
    else{
        buttonEdit.classList.remove("form__button_inactive");
        firstSpanEdit.classList.remove("input__error-active");
        firstSpanEdit.textContent = " ";
        buttonEdit.disabled = false;
    }
});

secondInputEdit.addEventListener("input", function(){
    if (!secondInputEdit.validity.valid){
        buttonEdit.classList.add("form__button_inactive");
        secondSpanEdit.classList.add("input__error-active");
        secondSpanEdit.textContent = secondInputEdit.validationMessage;
        buttonEdit.disabled = true;
    }
    else{
        buttonEdit.classList.remove("form__button_inactive");
        secondSpanEdit.classList.remove("input__error-active");
        secondSpanEdit.textContent = " ";
        buttonEdit.disabled = false;
    }
});

const firstInputAdd = formularios[1].querySelector(".form__name");
const firstSpanAdd = formularios[1].querySelector(".error__info-title");
const secondInputAdd = formularios[1].querySelector(".form__info-url");
const secondSpanAdd = formularios[1].querySelector(".error__info-link");
const buttonAdd = formularios[1].querySelector(".form__button-add");

