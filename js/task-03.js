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

const listGalleryRef = document.querySelector('.gallery');

const makeGalleryItems = images => {
  const { url, alt } = images;
  return `<li><img src="${url}" alt="${alt}" style="width: 100%"></li>\n`;
};

const galleryItems = images.map(makeGalleryItems).join('');

listGalleryRef.insertAdjacentHTML('beforeend', galleryItems);

listGalleryRef.style.listStyleType = 'none';
listGalleryRef.style.display = 'flex';
listGalleryRef.style.justifyContent = 'space-between';
listGalleryRef.style.gap = '10px';
listGalleryRef.style.padding = '50px';
listGalleryRef.style.backgroundColor = '#D9D9D9';
listGalleryRef.style.borderRadius = '30px';
