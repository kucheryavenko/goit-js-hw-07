import { otherGalleryItems } from './gallery-items.js';
// Change code below this line

console.log(otherGalleryItems);

const galleryContainer = document.querySelector('.gallery');
const cardsMarkup = createImageCardsMarkup(otherGalleryItems);

galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup); // Рендерим элементы разметки  

// Функция createImageCardsMarkup создаёт разметку по массиву данных galleryItems
function createImageCardsMarkup(otherGalleryItems) {
    return otherGalleryItems.map(({ preview, original, description }) => {
        return `
     <li>
        <a class="gallery__link" href="${original}">
            <img loading="lazy" class="gallery__image lazyload" data-src="${preview}" alt="${description}" />
        </a>
    </li>`;
    })
    .join('');
}; 

// Запускаем библиотеку SimpleLightbox и выводим 'alt' c задержкой 250 ms
var lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250, captionsData: 'alt'});

// Поддержка кроссбраузерности с помощью атрибута loading="lazy" и библиотеки lazysizes
if ('loading' in HTMLImageElement.prototype) {
    const lazyImage = document.querySelectorAll('img[loading="lazy"]');
    lazyImage.forEach(img => {
        img.src = img.dataset.src; 
    });
} else {
    const scriptLibrary = document.createElement('script');
    scriptLibrary.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    scriptLibrary.integrity = 'sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ==';
    scriptLibrary.crossOrigin = 'anonymous';
    scriptLibrary.referrerPolicy = 'no-referrer';
    

    document.body.appendChild(scriptLibrary);
};
