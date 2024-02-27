let shoes = [
    {id: "producto-01", name: "tennis nice", price: 62.000, category: "deportivo", image:  "../images/mangas/vinlandSaga01.webp", description: ""},
]

function createCards(shoe) {
    const {name, price, category, image, description} = shoe;

    const card = document.createElement('div');
    card.classList.add("cardProduct");

    const containerImg = document.createElement('div')
    containerImg.classList.add("containerImages");

    const imgCard = document.createElement("img");
    imgCard.setAttribute("src", image);
    imgCard.setAttribute("alt", `${id}-${title}`);
    imgCard.classList.add('imgProduct');

    const nameCard = document.createElement("p");
    nameCard.textContent = title;
    nameCard.classList.add("nameProduct");

    const priceCard = document.createElement("p");
    priceCard.classList.add("priceProduct");
    priceCard.textContent = price;
    
    const cantidad = document.createElement(`p`)
    cantidad.textContent = stock;

    const containerDescriptionCard = document.createElement("img");
    containerDescriptionCard.setAttribute("src", "./images/icons/boton-de-informacion.png");
    containerDescriptionCard.classList.add("containerDescriptionCard");


    const descriptionCard = document.createElement("p");
    descriptionCard.textContent = description;
    descriptionCard.classList.add("descriptionCard");
    descriptionCard.style.display = "none";

    containerDescriptionCard.addEventListener("click", () => descriptionManga(descriptionCard));

    const btnCard = document.createElement("button");
    btnCard.setAttribute("id", id);
    btnCard.classList.add("btnCard");
    btnCard.textContent = "Agregar a la bolsa";
    btnCard.addEventListener("click", () => countBag(manga));

    const btnEdit = document.createElement("button");
    btnEdit.setAttribute("id", `edit-${id}`);
    btnEdit.classList.add("btnEdit");
    btnEdit.textContent = "Editar";
    btnEdit.addEventListener("click", () => editCard(manga));

    containerImg.appendChild(imgCard);

    card.appendChild(containerImg);
    card.appendChild(nameCard);
    card.appendChild(priceCard);
    card.appendChild(cantidad)
    card.appendChild(btnCard);
    card.appendChild(containerDescriptionCard);
    card.appendChild(descriptionCard);
    card.appendChild(btnEdit);


    containerCards.appendChild(card);
}