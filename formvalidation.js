
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


class FormularioEdit {
    constructor(form) {
    this._form = form;
    this._firstInputEdit = form.querySelector(".form__info-name");
    this._firstSpanEdit = form.querySelector(".form__input-error-name");
    this._secondInputEdit = form.querySelector(".form__info-tag");
    this._secondSpandEdit = form.querySelector(".form__input-error-tag");
    this._buttonEdit = form.querySelector(".form__button");
    
    this._primero = false;
    this._segundo = false;
    
    this._SetEventListeners();
}

_valido(){
    if ((primero == true || segundo == true)|| (primero == true && segundo == true)){
        this._buttonEdit.classList.add("form__button_inactive");
        this._buttonEdit.disabled =true;
    }
    else{
        console.log("habilitado")
        this._buttonEdit.classList.remove("form__button_inactive");
        this._buttonEdit.disabled =false;
    }
}

_SetEventListeners(){
this.firstInput.addEventListener("input", () => {
    if (!this.firstInput.validity.valid) {
        this.firstSpan.classList.add("form__input-error-active");
        this.firstSpan.textContent = this.firstInput.validationMessage;
        this.primero = true;
    } else {
        this.firstSpan.classList.remove("form__input-error-active");
        this.firstSpan.textContent = " ";
        this.primero = false;
        }
        this.valido();
    });
    
    this.secondInput.addEventListener("input", () => {
    if (!this.secondInput.validity.valid) {
        this.secondSpan.classList.add("form__input-error-active");
        this.secondSpan.textContent = this.secondInput.validationMessage;
        this.segundo = true;
    } else {
        this.secondSpan.classList.remove("form__input-error-active");
        this.secondSpan.textContent = " ";
        this.segundo = false;
        }
        this.valido();
    });
    }
};

const formularios = document.querySelectorAll(".form");
const formularioEdit = new FormularioEdit(formularios[0]);

*/