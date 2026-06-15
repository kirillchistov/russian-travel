import { Place } from '../data/places';

function createPlace(place: Place): HTMLElement {
  const article = document.createElement('article');
  article.className = 'place';

  const title = document.createElement('h2');
  title.className = 'place__title';
  title.textContent = place.title;

  const website = document.createElement('div');
  website.className = 'place__website';

  const urlHeading = document.createElement('p');
  urlHeading.className = 'place__url-heading';
  urlHeading.textContent = 'URL';

  const link = document.createElement('a');
  link.className = 'place__link';
  link.href = place.url;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.textContent = place.urlText;

  website.append(urlHeading, link);

  const image = document.createElement('img');
  image.className = 'place__image';
  image.src = place.imageSrc;
  image.alt = place.imageAlt;
  image.loading = 'lazy';

  const textBlock = document.createElement('div');
  textBlock.className = 'place__text';

  for (const text of place.paragraphs) {
    const p = document.createElement('p');
    p.className = 'place__paragraph';
    p.textContent = text;
    textBlock.appendChild(p);
  }

  article.append(title, website, image, textBlock);
  return article;
}

export function renderPlaces(places: Place[], container: HTMLElement): void {
  const fragment = document.createDocumentFragment();
  for (const place of places) {
    fragment.appendChild(createPlace(place));
  }
  container.appendChild(fragment);
}
