import { CreateCards } from './cardComponents/cards.js';

export class menuComponents {
  constructor(images) {
    this.images = images;
    this.elements = {};
    this.wrapper = this.getParentNode();
  }

  getParentNode() {
    return document.querySelector('#content');
  }

  createElements() {
    this.elements.menuPageRestaurant = document.createElement('section');
    this.elements.title = document.createElement('p');
    this.elements.menuContainer = document.createElement('div');
  }

  setAttributes() {
    this.elements.menuPageRestaurant.classList.add('menu-page-restaurant');

    this.elements.title.classList.add('title');
    this.elements.title.textContent = 'Menu';

    this.elements.menuContainer.classList.add('menu-container');
  }

  assembleElements() {
    this.wrapper.append(this.elements.menuPageRestaurant);

    this.elements.menuPageRestaurant.append(
      this.elements.title,
      this.elements.menuContainer
    );
  }

  imgRender() {
    const newCards = new CreateCards(
      this.elements.menuContainer,
      this.images.cardsImg,
      'menu'
    );

    newCards.render();
  }

  removeRender() {
    Array.from(this.wrapper.children).forEach((child) => {
      console.log(child);
      child.remove();
    });
  }

  render() {
    this.createElements();
    this.setAttributes();
    this.assembleElements();
    this.imgRender();
  }
}
