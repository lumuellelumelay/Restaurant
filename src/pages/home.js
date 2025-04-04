// On this file, it will create and render the components of the home page.
// This file will serve as a handler for the homeComponents.
import { CreateCards } from './cardComponents/cards.js';
import { CreateWnCards } from './whatsNextComponents/whatsNextCards.js';

export class homeComponents {
  constructor(images, wnImages) {
    this.images = images;
    this.wnImages = wnImages;
    this.elements = {};
    this.wrapper = this.getParentNode();
  }

  getParentNode() {
    return document.querySelector('#content');
  }

  createElements() {
    // hero banner
    this.elements.heroBanner = document.createElement('div');
    this.elements.bannerDescription = document.createElement('div');
    this.elements.titleBanner = document.createElement('p');
    this.elements.subtitleBanner = document.createElement('p');
    this.elements.actionButton = document.createElement('div');
    this.elements.primaryButton = document.createElement('button');

    // special section
    this.elements.heroPageRestaurantSpecials =
      document.createElement('section');
    this.elements.specialsTitle = document.createElement('p');
    this.elements.menuContainer = document.createElement('div');

    // what's new section
    this.elements.whatsNew = document.createElement('section');
    this.elements.whatsNewTitle = document.createElement('p');
    this.elements.whatsNewContent = document.createElement('div');

    // newsletter section
    this.elements.newsletter = document.createElement('section');

    this.elements.newsletterContainer = document.createElement('div');

    this.elements.newsletterContent = document.createElement('div');

    this.elements.newsletterSubtitle = document.createElement('p');
    this.elements.newsletterDescription = document.createElement('p');
    this.elements.newsletterForm = document.createElement('form');

    this.elements.newsletterButton = document.createElement('button');
    this.elements.newsletterInput = document.createElement('input');
  }

  setAttributes() {
    this.setHeroBanner();
    this.setSpecials();
    this.setWhatsNew();
    this.setNewsletter();
  }

  setHeroBanner() {
    this.elements.heroBanner.classList.add('hero-banner');
    this.elements.bannerDescription.classList.add('banner-description');

    this.elements.titleBanner.classList.add('title-banner');
    this.elements.titleBanner.textContent = 'Welcome to our Restaurant';

    this.elements.subtitleBanner.classList.add('subtitle-banner');
    this.elements.subtitleBanner.textContent =
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, voluptatibus.';

    this.elements.actionButton.classList.add('action-button');
    this.elements.primaryButton.classList.add('primary-button');
    this.elements.primaryButton.textContent = 'Learn More';
  }

  setSpecials() {
    this.elements.heroPageRestaurantSpecials.classList.add(
      'hero-page-restaurant-specials'
    );

    this.elements.specialsTitle.classList.add('title');
    this.elements.specialsTitle.textContent = 'Our Specials';

    this.elements.menuContainer.classList.add('menu-container');
  }

  setWhatsNew() {
    this.elements.whatsNew.classList.add('whats-new');

    this.elements.whatsNewTitle.classList.add('title');
    this.elements.whatsNewTitle.textContent = `What's New?`;

    this.elements.whatsNewContent.classList.add('whats-new-content');
  }

  setNewsletter() {
    this.elements.newsletter.classList.add('newsletter');

    this.elements.newsletterContainer.classList.add('newsletter-container');
    this.elements.newsletterContent.classList.add('newsletter-content');

    this.elements.newsletterSubtitle.classList.add('subtitle');
    this.elements.newsletterSubtitle.textContent =
      'Subscribe to our newsletter';

    this.elements.newsletterDescription.classList.add('description');
    this.elements.newsletterDescription.textContent =
      'Lorem ipsum dolor sit amet consectur adipisicing elit. Dolor que, volutibus.';

    this.elements.newsletterForm.classList.add('newsletter-form');

    this.elements.newsletterButton.classList.add('gen-button');
    this.elements.newsletterButton.textContent = 'Subscribe';

    this.elements.newsletterInput.setAttribute('type', 'email');
    this.elements.newsletterInput.setAttribute(
      'placeholder',
      'Enter your email'
    );
  }

  assembleElements() {
    this.wrapper.append(
      this.elements.heroBanner,
      this.elements.heroPageRestaurantSpecials,
      this.elements.whatsNew,
      this.elements.newsletter
    );

    // hero banner
    this.elements.heroBanner.appendChild(this.elements.bannerDescription);

    this.elements.bannerDescription.append(
      this.elements.titleBanner,
      this.elements.subtitleBanner,
      this.elements.actionButton
    );

    this.elements.actionButton.appendChild(this.elements.primaryButton);

    // specials section
    this.elements.heroPageRestaurantSpecials.append(
      this.elements.specialsTitle,
      this.elements.menuContainer
    );

    // what's new section
    this.elements.whatsNew.append(
      this.elements.whatsNewTitle,
      this.elements.whatsNewContent
    );

    // newsletter section
    this.elements.newsletter.append(this.elements.newsletterContainer);

    this.elements.newsletterContainer.append(this.elements.newsletterContent);

    this.elements.newsletterContent.append(
      this.elements.newsletterSubtitle,
      this.elements.newsletterDescription,
      this.elements.newsletterForm
    );

    this.elements.newsletterForm.append(
      this.elements.newsletterButton,
      this.elements.newsletterInput
    );
  }

  imgRender() {
    this.heroBannerImg();

    const newCards = new CreateCards(
      this.elements.menuContainer,
      this.images.cardsImg,
      'home'
    );
    newCards.render();

    const wnCards = new CreateWnCards(
      this.elements.whatsNewContent,
      this.wnImages
    );
    wnCards.render();
  }

  heroBannerImg() {
    const heroBanner = document.querySelector('.hero-banner');

    const heroBannerImg = document.createElement('img');
    heroBannerImg.src = this.images.bannerImg;

    heroBanner.prepend(heroBannerImg);
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
