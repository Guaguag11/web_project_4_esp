import { initialCards, 
    cardContent, 
    formEditado, 
    firstInputEdit, 
    secondInputEdit, 
    firstSpanEdit, 
    secondSpanEdit, 
    buttonEdit, 
    formAgregar, 
    firstInputAdd,
    secondInputAdd, 
    firstSpanAdd, 
    secondSpanAdd, 
    buttonAdd } from "./utils.js";

import {Card} from "./Card.js"

import {FormValidator} from "./FormValidation.js"

initialCards.forEach(function (element) {
    const cardFinal = new Card(element.name, element.link, ".template");
    cardContent.append(cardFinal.generateCard());
    
    });

const validacionFormularioEdit = new FormValidator(formEditado, 
    firstInputEdit, 
    secondInputEdit, 
    firstSpanEdit, 
    secondSpanEdit, 
    buttonEdit);
validacionFormularioEdit.setEventListeners();

const validacionFormularioAdd = new FormValidator(formAgregar, 
    firstInputAdd, 
    secondInputAdd, 
    firstSpanAdd, 
    secondSpanAdd, 
    buttonAdd);
validacionFormularioAdd.setEventListeners();
