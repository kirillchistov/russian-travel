import '../pages/index.css';
import { places } from './data/places';
import { renderPlaces } from './components/renderPlaces';
import { initLanguageSwitcher } from './components/languageSwitcher';

const container = document.querySelector<HTMLElement>('.places');
if (container) {
  renderPlaces(places, container);
}

initLanguageSwitcher();
