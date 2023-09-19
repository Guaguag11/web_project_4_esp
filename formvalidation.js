/*
const formularios = document.querySelectorAll(".form");
const firstInputEdit = formularios[0].querySelector(".form__info-name");
const firstSpanEdit = formularios[0].querySelector(".form__input-error-name");
const secondInputEdit = formularios[0].querySelector(".form__info-tag");
const secondSpanEdit = formularios[0].querySelector(".form__input-error-tag");
const buttonEdit = formularios[0].querySelector(".form__button");

let primero=false;
let segundo=false;

function valido(){
    if ((primero == true || segundo == true)|| (primero == true && segundo == true)){
        buttonEdit.classList.add("form__button_inactive");
        buttonEdit.disabled =true;
    }
    else{
        console.log("habilado")
        buttonEdit.classList.remove("form__button_inactive");
        buttonEdit.disabled =false;
    }
}

firstInputEdit.addEventListener("input", function(){
    if (!firstInputEdit.validity.valid) {
        firstSpanEdit.classList.add("form__input-error-active");
        firstSpanEdit.textContent = firstInputEdit.validationMessage;
        primero = true;
        valido();

    }
    else{
        firstSpanEdit.classList.remove("form__input-error-active");
        firstSpanEdit.textContent = " ";
        primero = false;
        valido();
    }
});

secondInputEdit.addEventListener("input", function(){
    if (!secondInputEdit.validity.valid){
        secondSpanEdit.classList.add("form__input-error-active");
        secondSpanEdit.textContent = secondInputEdit.validationMessage;
        segundo = true;
        valido();
    }
    else{
        secondSpanEdit.classList.remove("form__input-error-active");
        secondSpanEdit.textContent = " ";
        segundo = false;
        valido();

    }
});



const firstInputAdd = formularios[1].querySelector(".form__info-title");
const firstSpanAdd = formularios[1].querySelector(".form__input-error-title");
const secondInputAdd = formularios[1].querySelector(".form__info-url");
const secondSpanAdd = formularios[1].querySelector(".form__input-error-link");
const buttonAdd = formularios[1].querySelector(".form__button-add");

let primeroAdd=false;
let segundoAdd=false;

function validoAdd(){
    if ((primeroAdd == true || segundoAdd == true)|| (primeroAdd == true && segundoAdd == true)){
        buttonAdd.classList.add("form__button_inactive");
        buttonAdd.disabled =true;
    }
    else{
        console.log("se habilito");
        buttonAdd.classList.remove("form__button_inactive");
        buttonAdd.disabled =false;
    }
}


firstInputAdd.addEventListener("input",function(){
    if (!firstInputAdd.validity.valid){
        firstSpanAdd.classList.add("form__input-error-active");
        firstSpanAdd.textContent = firstInputAdd.validationMessage;
        primeroAdd = true;
        validoAdd();
    }
    else{
        firstSpanAdd.classList.remove("form__input-error-active");
        firstSpanAdd.textContent = " ";
        primeroAdd = false;
        validoAdd();
    }

});

secondInputAdd.addEventListener("input",function(){
if (!secondInputAdd.validity.valid){
    secondSpanAdd.classList.add("form__input-error-active");
    secondSpanAdd.textContent = secondInputAdd.validationMessage;
    segundoAdd = true;
    validoAdd();
    }
    else{
    secondSpanAdd.classList.remove("form__input-error-active");
    secondSpanAdd.textContent = " ";
    segundoAdd = false;
    validoAdd();
}
});


/*Crea la clase FormValidator, que establece la configuración para validar los campos del 
formulario de acuerdo con los siguientes requisitos:
Tu constructor tiene dos parámetros. 
El primer parámetro es un objeto de configuración que almacena los selectores y las clases 
del formulario, 
el segundo toma un elemento del formulario a validar.
Tiene métodos privados para procesar el formulario, que incluyen: comprobar la validez del campo, 
cambiar el estado del botón Submit, y agregar todos los controladores necesarios.
Tiene un método público enableValidation(), que activa la validación del formulario.
Crea una instancia de la clase FormValidator para cada formulario que deba ser validado.
*/

class FormularioEdit {
    constructor(form) {
    this._form = form;
    this._firstInputEdit = form.querySelector(".form__info-name");
    this._firstSpanEdit = form.querySelector(".form__input-error-name");
    this._secondInputEdit = form.querySelector(".form__info-tag");
    this._secondSpanEdit = form.querySelector(".form__input-error-tag");
    this._buttonEdit = form.querySelector(".form__button");
    
    this._primero = false;
    this._segundo = false;
    
    this._setEventListeners();
}

_valido(){
    if ((this._primero == true || this._segundo == true)|| (this._primero == true && this._segundo == true)){
        this._buttonEdit.classList.add("form__button_inactive");
        this._buttonEdit.disabled =true;
    }
    else{
        console.log("habilitado")
        this._buttonEdit.classList.remove("form__button_inactive");
        this._buttonEdit.disabled =false;
    }
}

_setEventListeners(){
this._firstInputEdit.addEventListener("input", () => {
    if (!this._firstInputEdit.validity.valid) {
        this._firstSpanEdit.classList.add("form__input-error-active");
        this._firstSpanEdit.textContent = this._firstInputEdit.validationMessage;
        this._primero = true;
    } else {
        this._firstSpanEdit.classList.remove("form__input-error-active");
        this._firstSpanEdit.textContent = " ";
        this._primero = false;
        }
        this._valido();
    });
    
    this._secondInputEdit.addEventListener("input", () => {
    if (!this._secondInputEdit.validity.valid) {
        this._secondSpanEdit.classList.add("form__input-error-active");
        this._secondSpanEdit.textContent = this._secondInputEdit.validationMessage;
        this._segundo = true;
    } else {
        this._secondSpanEdit.classList.remove("form__input-error-active");
        this._secondSpanEdit.textContent = " ";
        this._segundo = false;
        }
        this._valido();
    });
    }
};

const formularios = document.querySelectorAll(".form");
const formularioEdit = new FormularioEdit(formularios[0]);

