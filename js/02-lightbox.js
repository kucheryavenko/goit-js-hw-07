import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const cardsMarkup = createImageCardsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup); // Рендерим элементы разметки  

// Функция createImageCardsMarkup создаёт разметку по массиву данных galleryItems
function createImageCardsMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
     <li>
        <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
    </li>`;
    })
    .join('');
}; 

// Запускаем библиотеку SimpleLightbox и выводим 'alt' c задержкой 250 ms
var lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250, captionsData: 'alt'});


