import { galleryItems } from './gallery-items.js';

const containerPics = document.querySelector('.gallery');

const elementsGallery = galleryItems.map(pic => {
    const li = `
    <li class="gallery__item">
        <a class="gallery__link" href="${pic.original}">
            <img
                class="gallery__image"
                src='${pic.preview}'
                alt='${pic.description}'
            />
        </a>
    </li>`;
    return li;
}).join(' ');

containerPics.insertAdjacentHTML('afterbegin', elementsGallery);

const instancia = new SimpleLightbox('.gallery a', {captionDelay: 250, captionsData: 'alt'});

