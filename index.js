

const container = document.getElementById('container-card');
const english = document.getElementById('english');
const spanish = document.getElementById('spanish');
function loadLanguage(lang) {
    fetch('languages/' + lang + '.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById('store-title').textContent = data.title;

        container.innerHTML = '';
        createCards(data);

        const languageLink = document.getElementById('lenguage');
        const languagesList = document.getElementById('languages');

        languageLink.addEventListener('click', () => {
            languagesList.classList.toggle('toggle');
        });

        english.textContent = data.EEUU;
        spanish.textContent = data.colombia;
       

        //const idioms = document.querySelectorAll('.option');

        

        //const optionsArray = Array.from(idioms);
        //optionsArray.forEach(() =>{
            
        //})

       

    
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

        const price = document.createElement('p');
        price.textContent = product.price;

        const button = document.createElement('button');
        button.textContent = product.button;
        button.classList.add('addBag')

        containerImg.appendChild(img);
        card.appendChild(containerImg);
        containerInfo.appendChild(name);
        containerInfo.appendChild(price);
        containerInfo.appendChild(button);
        card.appendChild(containerInfo);

        container.appendChild(card);
    });
}
