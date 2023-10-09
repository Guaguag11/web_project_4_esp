export class Card {
    constructor(name, link, cardSelector,){
        this._name = name;
        this._link = link;
        this._cardSelector = cardSelector;
        this._like = this._like.bind(this);
        this._trash = this._trash.bind(this);
        this._popUp = this._popUp.bind(this);
    }
    
    _cloneTemplate(){
        this._template =document.querySelector(this._cardSelector).content;
        this._templateClonado = this._template.querySelector(".element").cloneNode(true);
        
        this._likeBtn = this._templateClonado.querySelector(".element__like");
        this._activeLike = this._templateClonado.querySelector(".element__like-active");
        this._trashBtn = this._templateClonado.querySelector(".element__trash");
        this._image = this._templateClonado.querySelector(".element__image");
        this._title = this._templateClonado.querySelector(".element__name");
        
        return this._templateClonado;
    }
    
    _like(){
        this._activeLike.classList.toggle("element__like-active-visible");
        console.log("se dió like");
    }
    
    _trash(){
        this._cardFinal.remove();
    }
    
    _popUp(){
    this._modalImage = document.querySelector(".image");
    this._img = this._modalImage.querySelector(".image__pop-up");
    this._imageName = document.querySelector(".image__name");
    this._modalImage.classList.toggle("image__visible");
    this._img.src = this._link;
    this._imageName.textContent = this._name;
    }
    
    _setEventListeners(){
    this._likeBtn.addEventListener("click", this._like);
    this._trashBtn.addEventListener("click", this._trash);
    this._image.addEventListener("click", this._popUp);
    }
    
    generateCard(){
    this._cardFinal = this._cloneTemplate();
    this._setEventListeners();
    this._image.src = this._link;
    this._title.textContent = this._name;
    return this._cardFinal;
    }
}



