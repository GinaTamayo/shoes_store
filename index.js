

const container = document.getElementById('container-card');

function loadLanguage(lang) {
    fetch('languages/' + lang + '.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById('store-title').textContent = data.title;

        container.innerHTML = '';
        createCards(data);

        const idiomActuall = document.getElementById('language');
        const listIdioms = document.getElementById('languages');
        const idioms = document.querySelectorAll('.option');

        idiomActuall.addEventListener('click', () => {
            listIdioms.classList.toggle('toggle');
        });

        const optionsArray = Array.from(idioms);
        optionsArray.forEach(() =>{
            
        })
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

        const name = document.createElement('h2');
        name.textContent = product.name;

        const price = document.createElement('p');
        price.textContent = product.price;

        const button = document.createElement('button');
        button.textContent = product.button;

        containerImg.appendChild(img);
        card.appendChild(containerImg);
        card.appendChild(name);
        card.appendChild(price);
        card.appendChild(button);

        container.appendChild(card);
    });
}
