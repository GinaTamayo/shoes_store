const container = document.getElementById('container-card');
const languages = document.getElementById('languages');
const search = document.getElementById('seeker');
const languageLink = document.getElementById('lenguage');
const languagesList = document.getElementById('languages');



function loadLanguage(lang) { 
    fetch('languages/' + lang + '.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById('store-title').textContent = data.title;
        document.getElementById('shoes').textContent = data.shoes;
        document.getElementById('clothes').textContent = data.clothes;
        document.getElementById('accesories').textContent = data.accesories;
        document.getElementById('handbags').textContent = data.handbags;
        document.getElementById('footer').textContent = data.footer;

        document.getElementById('seeker').placeholder = data.placeholder;

        container.innerHTML = '';
        createCards(data);

        
        languageLink.querySelector('img').src = `./icons/${lang}.png`;
        


        
        languageLink.addEventListener('click', () => {
            languagesList.classList.toggle('toggle');
        });

        const english = document.getElementById('english');
        const spanish = document.getElementById('spanish');
        english.textContent = data.EEUU;
        spanish.textContent = data.colombia;
    });
}


function createCards(data) {
    data.products.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('card');

        const containerImg = document.createElement('div');
        containerImg.classList.add('container-image');

        const img = document.createElement('img');
        img.src = product.image;
        img.alt = 'Product Image';
        img.classList.add('imgProduct');

        const containerInfo = document.createElement('div');
        containerInfo.classList.add('container-info');

        const name = document.createElement('h2');
        name.textContent = product.name;
        name.classList.add('name');

        card.setAttribute('data-category', product.category);

        const price = document.createElement('p');
        price.textContent = product.price;
        price.classList.add('price');

        const button = document.createElement('button');
        button.textContent = product.button;
        button.classList.add('addBag');

        containerImg.appendChild(img);
        card.appendChild(containerImg);
        containerInfo.appendChild(name);
        containerInfo.appendChild(price);
        containerInfo.appendChild(button);
        card.appendChild(containerInfo);

        container.appendChild(card);
    });
}

search.addEventListener('input', seeker);
function seeker() {
    const searchTerm = this.value.toLowerCase();
    document.querySelectorAll(".card").forEach(card => {
        const title = card.querySelector(".name").textContent.toLowerCase();
        const category = card.getAttribute("data-category").toLowerCase();
        if (title.includes(searchTerm) || category.includes(searchTerm)) {
            card.classList.remove("filtro");
        } else {
            card.classList.add("filtro");
        }
    });
}
