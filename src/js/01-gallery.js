import { galleryItems } from './gallery-items.js';
// Change code below this line

const containerPics = document.querySelector('.gallery');

const elementsGallery = galleryItems.map(pic => {
    const li = `
    <li class="gallery__item">
        <a class="gallery__link" href="${pic.original}">
            <img
                class="gallery__image"
                src='${pic.preview}'
                data-source="${pic.original}"
                alt='${pic.description}'
            />
        </a>
    </li> `;
    return li;
}).join(' ');

containerPics.insertAdjacentHTML('afterbegin', elementsGallery);

const onPicClick = (action) => {
    action.preventDefault();
    const validate = action.target.nodeName === 'IMG' ? onModal(action) : null;
    return validate;
}

const onModal = (act) => {
    const instance = basicLightbox.create(`
    <img src="${act.target.dataset.source}">`);
    const closeModal = () => {
        instance.close();
        document.removeEventListener('keydown', onEscPress);
    };
    const onEscPress = (event) => {
        event.code === 'Escape' ? closeModal() : null;
    };
    
    instance.show();
    document.addEventListener('keydown', onEscPress);
}
containerPics.addEventListener('click', onPicClick);




// import * as basicLightbox from 'basiclightbox'

// const instance = basicLightbox.create(`
//     <img src="assets/images/image.png" width="800" height="600">
// `)

// instance.show()

// console.log(galleryItems);


