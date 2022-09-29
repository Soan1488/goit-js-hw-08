import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const galleryEl = document.querySelector('.gallery');
const imagesMarkup = createImagesMarkup(galleryItems);

galleryEl.insertAdjacentHTML('beforeend', imagesMarkup);

function createImagesMarkup(galleryItems) {
  return galleryItems
    .map(
      image => `<a class="gallery__item" href="${image.original}">
     <img class="gallery__image" src="${image.preview}" data-source="${image.original}" 
     alt="${image.description}"/></a>`
    )
    .join('');
}

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

lightbox.on('show.simplelightbox', () => {});

console.log(galleryItems);
