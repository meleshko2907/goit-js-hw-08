// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Change code below this line
const galleryBox = document.querySelector('.gallery');

const cardsMarkup = createCardsMarkup(galleryItems);

galleryBox.insertAdjacentHTML('beforeend', cardsMarkup);

galleryBox.addEventListener('click', event => {
  event.preventDefault();

  let gallery = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
  gallery.on('show.simplelightbox', function () {
    console.log(gallery);
  });
});

function createCardsMarkup(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) =>
        `<a class = "gallery__link" href = "${original}">
      <img class = "gallery__image" src = "${preview}" 
       alt = "${description}"></a>`
    )
    .join('');
}

console.log(SimpleLightbox);
console.log(galleryItems);