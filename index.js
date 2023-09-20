import { initialCards, cardContent, formEditado, firstInputEdit, secondInputEdit, firstSpanEdit, secondSpanEdit, buttonEdit, formAgregar, firstInputAdd,secondInputAdd, firstSpanAdd, secondSpanAdd, buttonAdd } from "./utils.js";

import {Card} from "./card.js"

import {FormValidator} from "./formvalidation.js"

initialCards.forEach(function (element, i) {
    const cardFinal = new Card(element.name, element.link, ".template");
    cardContent.append(cardFinal.generateCard());
    
    });

const validacionFormularioEdit = new FormValidator(formEditado, firstInputEdit, secondInputEdit, firstSpanEdit, secondSpanEdit, buttonEdit);
validacionFormularioEdit.setEventListeners();

const validacionFormularioAdd = new FormValidator(formAgregar, firstInputAdd, secondInputAdd, firstSpanAdd, secondSpanAdd, buttonAdd);
validacionFormularioAdd.setEventListeners();