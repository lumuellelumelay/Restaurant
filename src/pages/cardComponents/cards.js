// This file is used to genereat cards depending on the page the user is on.
export class CreateCards {
  constructor(container, imgData, status) {
    this.container = container; // contains the parent container of the cards
    this.imgData = this.extractImg(imgData, status);
    this.elements = {};
  }

  extractImg(imgData, status) {
    if (status === 'home') {
      const randomImg = [...imgData].sort(() => Math.random() - 0.5);
      return randomImg.slice(0, 3);
    } else {
      return imgData;
    }
  }

  createCards() {
    this.elements.menuCard = document.createElement('div');
    this.elements.topSection = document.createElement('div');

    this.elements.img = document.createElement('img');

    this.elements.bottomSection = document.createElement('div');

    this.elements.topDescription = document.createElement('div');
    this.elements.subtitle = document.createElement('p');
    this.elements.line = document.createElement('div');
    this.elements.price = document.createElement('p');

    this.elements.bottomDescription = document.createElement('div');
    this.elements.description = document.createElement('p');
  }

  setAttributes(img, alt, title, price, description) {
    this.elements.menuCard.classList.add('menu-card');

    this.elements.topSection.classList.add('top-section');
    this.elements.bottomSection.classList.add('bottom-section');

    this.elements.img.src = img;
    this.elements.img.alt = alt;

    this.elements.topDescription.classList.add('top-description');
    this.elements.bottomDescription.classList.add('bottom-description');

    this.elements.subtitle.classList.add('subtitle');
    this.elements.subtitle.textContent = title;
    this.elements.line.classList.add('line');
    this.elements.price.classList.add('price');
    this.elements.price.textContent = price;

    this.elements.description.classList.add('description');
    this.elements.description.textContent = description;
  }

  assembleElements() {
    this.container.appendChild(this.elements.menuCard);

    this.elements.menuCard.append(
      this.elements.topSection,
      this.elements.bottomSection
    );

    this.elements.topSection.append(this.elements.img);

    this.elements.bottomSection.append(
      this.elements.topDescription,
      this.elements.bottomDescription
    );

    this.elements.topDescription.append(
      this.elements.subtitle,
      this.elements.line,
      this.elements.price
    );

    this.elements.bottomDescription.append(this.elements.description);
  }

  render() {
    this.imgData.forEach((img) => {
      this.createCards();
      this.setAttributes(
        img.img,
        img.alt,
        img.title,
        img.price,
        img.description
      );
      this.assembleElements();
    });
  }
}
