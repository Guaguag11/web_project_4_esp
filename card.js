
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

initialCards.forEach(function (element, i) {
const template =document.querySelector(".template").content;
let templateClonado = template.querySelector(".element").cloneNode(true);

console.log(templateClonado);

let nameD = templateClonado.querySelector(".element__name");
let imagenD = templateClonado.querySelector(".element__image");

nameD.textContent = element.name; 
imagenD.setAttribute("src", "" + element.link); 

cardContent.append(templateClonado);

});
