import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const cardsMarkup = createImageCardsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup); // Рендерим элементы разметки  
galleryContainer.addEventListener('click', onOpenCloseModal); // Открываем модальное окно (изображение)

// Функция createImageCardsMarkup создаёт разметку по массиву данных galleryItems
function createImageCardsMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
     <div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
    </div>`;
    })
    .join('');
}; 

// Функция onOpenCloseModal открывает/закрывает модальное окно (изображение) с помощью библиотеки basicLightbox
function onOpenCloseModal(event) {
    event.preventDefault();

    if (event.target.nodeName !== 'IMG') {
        return;
    }

    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" />
    `, {
        onShow: () => {window.addEventListener('keydown', onEscKeyPress)}
    });

    instance.show();

    function onEscKeyPress(event) {
        if (event.code === 'Escape') {
            instance.close();
        };
    };
};