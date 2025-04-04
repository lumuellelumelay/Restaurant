export class Navigation {
  constructor(home, menu, about) {
    this.desktopElement = document.querySelector('.desktop-view-navigation');
    this.mobileElement = document.querySelector('.mobile-view-navigation');
    this.navMobile = null;
    this.navElements = null;
    this.home = home;
    this.menu = menu;
    this.about = about;
    this.initialize();
  }

  initialize() {
    if (this.desktopElement) {
      this.navElements = [
        this.desktopElement.querySelector('#home'),
        this.desktopElement.querySelector('#menu'),
        this.desktopElement.querySelector('#about'),
      ];

      this.navElements[0].dataset.status = 'true';
      this.navElements[1].dataset.status = 'false';
      this.navElements[2].dataset.status = 'false';

      // Now set up event handlers
      this.setupDesktopEvents();
    }

    if (this.mobileElement) {
      this.navMobile = [
        this.mobileElement.querySelector('#home'),
        this.mobileElement.querySelector('#menu'),
        this.mobileElement.querySelector('#about'),
      ];

      this.navMobile[0].dataset.mStatus = 'true';
      this.navMobile[1].dataset.mStatus = 'false';
      this.navMobile[2].dataset.mStatus = 'false';
    }

    this.setupMobileEvents();
  }

  setupDesktopEvents() {
    this.navElements[0].addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();

      if (this.navElements[0].dataset.status === 'true') {
        return;
      }

      this.navMobile[0].dataset.mStatus = 'true';
      this.navMobile[1].dataset.mStatus = 'false';
      this.navMobile[2].dataset.mStatus = 'false';

      this.navElements[0].dataset.status = 'true';
      this.navElements[1].dataset.status = 'false';
      this.navElements[2].dataset.status = 'false';

      this.about.removeRender();
      this.menu.removeRender();
      this.home.render();
      console.log('home clicked');
    });

    this.navElements[1].addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();

      if (this.navElements[1].dataset.status === 'true') {
        return;
      }

      this.navMobile[0].dataset.mStatus = 'false';
      this.navMobile[1].dataset.mStatus = 'true';
      this.navMobile[2].dataset.mStatus = 'false';

      this.navElements[1].dataset.status = 'true';
      this.navElements[2].dataset.status = 'false';
      this.navElements[0].dataset.status = 'false';

      this.about.removeRender();
      this.home.removeRender();
      this.menu.render();
      console.log('menu clicked');
    });

    this.navElements[2].addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();

      if (this.navElements[2].dataset.status === 'true') {
        return;
      }

      this.navMobile[0].dataset.mStatus = 'false';
      this.navMobile[1].dataset.mStatus = 'false';
      this.navMobile[2].dataset.mStatus = 'true';

      this.navElements[2].dataset.status = 'true';
      this.navElements[1].dataset.status = 'false';
      this.navElements[0].dataset.status = 'false';

      this.home.removeRender();
      this.menu.removeRender();
      this.about.render();
      console.log('about clicked');
    });
  }

  setupMobileEvents() {
    this.navMobile[0].addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();

      if (this.navMobile[0].dataset.mStatus === 'true') {
        return;
      }

      this.navElements[0].dataset.status = 'true';
      this.navElements[1].dataset.status = 'false';
      this.navElements[2].dataset.status = 'false';

      this.navMobile[0].dataset.mStatus = 'true';
      this.navMobile[1].dataset.mStatus = 'false';
      this.navMobile[2].dataset.mStatus = 'false';

      this.about.removeRender();
      this.menu.removeRender();
      this.home.render();
      console.log('home clicked');
    });

    this.navMobile[1].addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();

      if (this.navMobile[1].dataset.mStatus === 'true') {
        return;
      }

      this.navElements[1].dataset.status = 'true';
      this.navElements[2].dataset.status = 'false';
      this.navElements[0].dataset.status = 'false';

      this.navMobile[0].dataset.mStatus = 'false';
      this.navMobile[1].dataset.mStatus = 'true';
      this.navMobile[2].dataset.mStatus = 'false';

      this.about.removeRender();
      this.home.removeRender();
      this.menu.render();
      console.log('menu clicked');
    });

    this.navMobile[2].addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();

      if (this.navMobile[2].dataset.mStatus === 'true') {
        return;
      }

      this.navElements[2].dataset.status = 'true';
      this.navElements[1].dataset.status = 'false';
      this.navElements[0].dataset.status = 'false';

      this.navMobile[0].dataset.mStatus = 'false';
      this.navMobile[1].dataset.mStatus = 'false';
      this.navMobile[2].dataset.mStatus = 'true';

      this.home.removeRender();
      this.menu.removeRender();
      this.about.render();
      console.log('about clicked');
    });
  }
}
