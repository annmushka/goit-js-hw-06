const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryListItem = document.querySelector(".gallery");

const galleryCardEl = elem => {
  const { url, alt } = elem;
  return `<li><img src="${url}" alt="${alt}" width="500" height="350"></li>`;
}; 
const galleryCardsEl = images.map(galleryCardEl).join('');
 galleryListItem.insertAdjacentHTML('afterbegin', galleryCardsEl);
  document.querySelector('.gallery').style = "display:flex;justify-content:center; gap: 40px; align-items:center; list-style:none; object-fit:cover"

  