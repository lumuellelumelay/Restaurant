export class CreateWnCards {
  constructor(container, imgData) {
    this.container = container; // contains the parent container of the cards
    this.images = imgData;
    this.elements = {};
  }

  createCards() {
    this.elements.wnCard = document.createElement('div');

    this.elements.topSection = document.createElement('div');
    this.elements.img = document.createElement('img');

    this.elements.bottomSection = document.createElement('div');
    this.elements.topDescription = document.createElement('div');
    this.elements.subtitle = document.createElement('p');

    this.elements.bottomDescription = document.createElement('div');
    this.elements.description = document.createElement('p');
    this.elements.genButton = document.createElement('button');
  }

  setAttributes(img, alt, title, description, action) {
    this.elements.wnCard.classList.add('whats-new-card');

    this.elements.topSection.classList.add('top-section');
    this.elements.bottomSection.classList.add('bottom-section');

    this.elements.img.src = img;
    this.elements.img.alt = alt;

    this.elements.topDescription.classList.add('top-description');
    this.elements.bottomDescription.classList.add('bottom-description');

    this.elements.subtitle.classList.add('subtitle');
    this.elements.subtitle.textContent = title;

    this.elements.description.classList.add('description');
    this.elements.description.textContent = description;

    this.elements.genButton.classList.add('gen-button');
    this.elements.genButton.textContent = action;
  }

  assembleElements() {
    this.container.append(this.elements.wnCard);

    this.elements.wnCard.append(
      this.elements.topSection,
      this.elements.bottomSection
    );

    this.elements.topSection.append(this.elements.img);

    this.elements.bottomSection.append(
      this.elements.topDescription,
      this.elements.bottomDescription
    );

    this.elements.topDescription.append(this.elements.subtitle);

    this.elements.bottomDescription.append(
      this.elements.description,
      this.elements.genButton
    );
  }

  render() {
    this.images.forEach((img) => {
      this.createCards();
      this.setAttributes(
        img.img,
        img.alt,
        img.title,
        img.description,
        img.action
      );
      this.assembleElements();
    });
  }
}
