import { navigationHandler } from './components/navigationHandler.js';
import { Navigation } from './components/navigation.js';
import { images, wnImages, aboutImage } from './components/centralizeImg.js';
import { homeComponents } from './pages/home.js';
import { menuComponents } from './pages/menu.js';
import { aboutComponents } from './pages/about.js';

// css imports
import './assets/styles/render.css';

document.addEventListener('DOMContentLoaded', () => {
  const home = new homeComponents(images, wnImages);
  const menu = new menuComponents(images);
  const about = new aboutComponents(aboutImage);
  home.render();

  new Navigation(home, menu, about);
  new navigationHandler();
});
