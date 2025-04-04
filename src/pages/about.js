export class aboutComponents {
  constructor(image) {
    this.image = image;
    this.elements = {};
    this.wrapper = this.getParentNode();
  }

  getParentNode() {
    return document.querySelector('#content');
  }

  createElements() {
    // about section
    this.elements.about = document.createElement('section');
    this.elements.title = document.createElement('p');

    this.elements.aboutContainer = document.createElement('div');
    this.elements.leftContainer = document.createElement('div');
    this.elements.rightContainer = document.createElement('div');

    this.elements.description = document.createElement('p');
    this.elements.aboutImage = document.createElement('img');

    // newsletter
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
    this.setAbout();
    this.setNewsletter();
  }

  setAbout() {
    this.elements.about.classList.add('about');
    this.elements.title.classList.add('title');
    this.elements.title.textContent = 'About Us';

    this.elements.aboutContainer.classList.add('about-container');
    this.elements.leftContainer.classList.add('left-container');
    this.elements.rightContainer.classList.add('right-container');

    this.elements.description.classList.add('description');
    this.elements.description.textContent =
      'Lorem ipsum dolor sit amet consectur adipisicing elit. Dolor que, volutibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam assumenda molestiae consectetur, maiores quos non totam. Perferendis rerum dolor repellendus eum autem velit, deserunt iure repudiandae. A deserunt itaque possimus? Lorem ipsum dolor sit amet consectur adipisicing elit. Dolor que, volutibus. Lorem ipsum dolor sit amet consectur adipisicing elit. Dolor que, volutibus.';

    this.elements.aboutImage.classList.add('about-image');
    this.elements.aboutImage.setAttribute('alt', this.image.alt);
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
    this.wrapper.append(this.elements.about, this.elements.newsletter);

    // about section
    this.elements.about.append(
      this.elements.title,
      this.elements.aboutContainer
    );

    this.elements.aboutContainer.append(
      this.elements.leftContainer,
      this.elements.rightContainer
    );

    this.elements.leftContainer.append(this.elements.description);

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

  aboutImg() {
    this.elements.aboutImage.src = this.image.img;
    this.elements.aboutImage.alt = this.image.alt;

    this.elements.rightContainer.append(this.elements.aboutImage);
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
    this.aboutImg();
  }
}
