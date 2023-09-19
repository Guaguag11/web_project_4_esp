
const cardContent = document.querySelector(".elements");
const initialCards = [
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

class Card {
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
        this._trashBtn = this._templateClonado.querySelector(".element__trash");
        this._image = this._templateClonado.querySelector(".element__image");
        this._title = this._templateClonado.querySelector(".element__name");
        
        return this._templateClonado;
    }
    
    _like(){
        this._like.classList.toggle(".element__like-active-visible");
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

initialCards.forEach(function (element, i) {
    const cardFinal = new Card(element.name, element.link, ".template");
    cardContent.append(cardFinal.generateCard());
    
    });


