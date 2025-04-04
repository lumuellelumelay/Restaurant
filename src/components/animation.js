export class HeaderAnimation {
  constructor() {
    this.initialize();
  }

  initialize() {
    const mobileToggleMenu = document.querySelector('.mobile-toggle-menu');
    const mobileViewNavigationWrapper = document.querySelector(
      '.mobile-view-navigation-wrapper'
    );
    const mobileCloseToggle = document.querySelector('.mobile-close-toggle');

    mobileToggleMenu.addEventListener('click', (e) => {
      e.preventDefault();
      const isToggled = mobileToggleMenu.dataset.isToggled;

      if (isToggled === 'false') {
        mobileToggleMenu.dataset.isToggled = 'true';
        mobileViewNavigationWrapper.dataset.status = 'true';
        mobileCloseToggle.dataset.isToggled = 'false';
      } else {
        mobileToggleMenu.dataset.isToggled = 'false';
      }
    });

    mobileCloseToggle.addEventListener('click', (e) => {
      e.preventDefault();
      const isToggled = mobileCloseToggle.dataset.isToggled;

      if (isToggled === 'false') {
        mobileCloseToggle.dataset.isToggled = 'true';
        mobileViewNavigationWrapper.dataset.status = 'false';
        mobileToggleMenu.dataset.isToggled = 'false';
      } else {
        mobileCloseToggle.dataset.isToggled = 'false';
      }
    });
  }
}
