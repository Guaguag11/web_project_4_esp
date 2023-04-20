

alert('hola!!!!')

let numero =prompt('cuantos taquitos quieres');
let taquitos= 'tu quieres' + ' ' +  numero  + ' ' + 'taquitos';

console.log(taquitos);



/* identificar variables */

let editButton = document.querySelector(".profile__button-edit");
let saveButton = document.querySelector(".form__button");
let closeButton = document.querySelector(".form__button-close");

let form = document.querySelector(".modal__form");

let pageName = document.querySelector(".profile__info-name");
let profession = document.querySelector(".profile__info-tag");
let formName = document.querySelector(".form__info-name");
let formTag = document.querySelector(".form__info-tag");

/* eventos y adentro una función */

editButton.addEventListener("click", function(){
    form.classList.toggle("modal__form-visible");
    formName.value = pageName.textContent;
    formTag.value = profession.textContent;
});

closeButton.addEventListener("click", function(){
    form.classList.toggle("modal__form-visible");
});

saveButton.addEventListener("click", function(){
    form.classList.toggle("modal__form-visible");
    pageName.textContent = formName.value;
    profession.textContent = formTag.value;
})


