import styles from '!!raw-loader!./Carousel.css';
import varStyles from '!!raw-loader!../../../shared/variables.css';
import bootstrapStyles from '!!raw-loader!../../../shared/themed-bootstrap.css';

const template = document.createElement('template');

template.innerHTML = `
<slot></slot>
`;

export default class Carousel extends HTMLElement {
  static get observedAttributes() {
    return ['data-active-item'];
  }

  constructor() {
    // Always call super first in constructor
    super();
    // Create a shadow root
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(template.content.cloneNode(true));
    this.carousel = document.createElement('div');
    this.carouselIndicators = document.createElement('div');
    this.carouselIndicators.className = 'carousel-indicators';
    this.carouselInner = document.createElement('div');
    this.carouselInner.className = 'carousel-inner';
    this.carouselPrev = document.createElement('button');
    this.carouselNext = document.createElement('button');
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line eqeqeq
    if (this.getAttribute('data-no-controls') != 'true') {
      // See CityOfDetroit/detroitmi#1099
      // eslint-disable-next-line eqeqeq
      if (this.getAttribute('data-external-controls') == 'true') {
        this.carouselPrev.className = 'carousel-control-prev position-relative';
        this.carouselNext.className = 'carousel-control-next position-relative';
      } else {
        this.carouselPrev.className = 'carousel-control-prev';
        this.carouselNext.className = 'carousel-control-next';
      }
      this.carouselPrev.type = 'button';
      this.carouselPrev.setAttribute(
        'data-bs-target',
        `#${this.getAttribute('data-id')}`,
      );
      this.carouselPrev.setAttribute('data-bs-slide', 'prev');
      // See CityOfDetroit/detroitmi#1099
      // eslint-disable-next-line prefer-const
      let prevIcon = document.createElement('span');
      prevIcon.className = 'carousel-control-prev-icon';
      prevIcon.setAttribute('aria-hidden', 'true');
      this.carouselPrev.appendChild(prevIcon);
      // See CityOfDetroit/detroitmi#1099
      // eslint-disable-next-line prefer-const
      let prevText = document.createElement('span');
      prevText.className = 'visually-hidden';
      prevText.innerText = 'Previous';
      this.carouselPrev.appendChild(prevText);
      this.carouselNext.type = 'button';
      this.carouselNext.setAttribute(
        'data-bs-target',
        `#${this.getAttribute('data-id')}`,
      );
      this.carouselNext.setAttribute('data-bs-slide', 'next');
      // See CityOfDetroit/detroitmi#1099
      // eslint-disable-next-line prefer-const
      let nextIcon = document.createElement('span');
      nextIcon.className = 'carousel-control-next-icon';
      nextIcon.setAttribute('aria-hidden', 'true');
      this.carouselNext.appendChild(nextIcon);
      // See CityOfDetroit/detroitmi#1099
      // eslint-disable-next-line prefer-const
      let nextText = document.createElement('span');
      nextText.className = 'visually-hidden';
      nextText.innerText = 'Next';
      this.carouselNext.appendChild(nextText);

      // Adding event listener to controls
      this.carouselPrev.addEventListener('click', this._onClick);
      this.carouselNext.addEventListener('click', this._onClick);
      this.carousel.appendChild(this.carouselPrev);
      this.carousel.appendChild(this.carouselInner);
      this.carousel.appendChild(this.carouselNext);
    } else {
      this.carousel.appendChild(this.carouselInner);
    }

    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line no-unused-vars
    shadow.addEventListener('slotchange', (e) => {
      // See CityOfDetroit/detroitmi#1099
      // eslint-disable-next-line prefer-const
      let tempElements = Array.from(this.children);
      let tempElementsCount = 0;
      tempElements.forEach((node, index) => {
        // See CityOfDetroit/detroitmi#1099
        // eslint-disable-next-line eqeqeq
        if (node.tagName == 'COD-CAROUSEL-ITEM') {
          tempElementsCount += 1;
          // See CityOfDetroit/detroitmi#1099
          // eslint-disable-next-line prefer-const
          let tempItem = document.createElement('div');
          tempItem.setAttribute('data-index', index);
          // See CityOfDetroit/detroitmi#1099
          // eslint-disable-next-line eqeqeq
          if (node.getAttribute('data-active') == 'true') {
            tempItem.className = 'carousel-item active';
            this.setAttribute('data-active-item', index);
          } else {
            tempItem.className = 'carousel-item';
          }
          // See CityOfDetroit/detroitmi#1099
          // eslint-disable-next-line eqeqeq
          node.getAttribute('data-interval') != undefined &&
          // See CityOfDetroit/detroitmi#1099
          // eslint-disable-next-line eqeqeq
          node.getAttribute('data-interval') != null
            ? tempItem.setAttribute(
                'data-bs-interval',
                node.getAttribute('data-interval'),
              )
            : 0;
          tempItem.appendChild(node);
          this.carouselInner.appendChild(tempItem);
          // See CityOfDetroit/detroitmi#1099
          // eslint-disable-next-line eqeqeq
          if (this.getAttribute('data-indicator') == 'true') {
            // See CityOfDetroit/detroitmi#1099
            // eslint-disable-next-line prefer-const
            let tempIndicator = document.createElement('button');
            tempIndicator.type = 'button';
            tempIndicator.setAttribute(
              'data-bs-target',
              `#${this.getAttribute('data-id')}`,
            );
            tempIndicator.setAttribute('data-bs-slide-to', index);
            tempIndicator.setAttribute('aria-label', `Slide ${index}`);
            // See CityOfDetroit/detroitmi#1099
            // eslint-disable-next-line eqeqeq
            if (node.getAttribute('data-active') == 'true') {
              tempIndicator.className = 'active';
              tempIndicator.setAttribute('aria-current', 'true');
            }
            tempIndicator.addEventListener('click', this._onClick);
            this.carouselIndicators.appendChild(tempIndicator);
            this.carousel.appendChild(this.carouselIndicators);
          }
        }
        tempElementsCount
          ? this.setAttribute('data-total-items', tempElementsCount)
          : 0;
        // See CityOfDetroit/detroitmi#1099
        // eslint-disable-next-line prefer-const
        let nodeClasses = node.className.split(' ');
        nodeClasses.includes('no-wc') ? node.remove() : 0;
      });
    });

    // Add styles
    const bootStyles = document.createElement('style');
    bootStyles.textContent = bootstrapStyles;
    const variableStyles = document.createElement('style');
    variableStyles.textContent = varStyles;
    const itemStyles = document.createElement('style');
    itemStyles.textContent = styles;
    shadow.appendChild(bootStyles);
    shadow.appendChild(variableStyles);
    shadow.appendChild(itemStyles);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line eqeqeq
    if (oldValue != null) {
      // See CityOfDetroit/detroitmi#1099
      // eslint-disable-next-line prefer-const
      let oldItem = this.carouselInner.querySelector(
        `[data-index="${oldValue}"`,
      );
      // See CityOfDetroit/detroitmi#1099
      // eslint-disable-next-line prefer-const
      let newItem = this.carouselInner.querySelector(
        `[data-index="${newValue}"`,
      );
      // See CityOfDetroit/detroitmi#1099
      // eslint-disable-next-line eqeqeq
      if (this.getAttribute('data-indicator') == 'true') {
        this.carouselIndicators.querySelector(
          `[data-bs-slide-to="${oldValue}"`,
        ).className = '';
        this.carouselIndicators.querySelector(
          `[data-bs-slide-to="${newValue}"`,
        ).className = 'active';
      }
      // See CityOfDetroit/detroitmi#1099
      // eslint-disable-next-line eqeqeq
      if (this.getAttribute('data-direction') == 'next') {
        oldItem.className = 'carousel-item active carousel-item-start';
        newItem.className =
          'carousel-item carousel-item-next carousel-item-start';
      } else {
        oldItem.className = 'carousel-item active carousel-item-end';
        newItem.className =
          'carousel-item carousel-item-prev carousel-item-end';
      }
      setTimeout(() => {
        oldItem.className = 'carousel-item';
        newItem.className = 'carousel-item active';
      }, 500);
    }
  }

  connectedCallback() {
    // Modal attributes
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line prefer-const
    let id = this.getAttribute('data-id');
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line prefer-const
    let crossfade = this.getAttribute('data-crossfade');
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line prefer-const
    let autoplay = this.getAttribute('data-autoplay');
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line prefer-const
    let noTouch = this.getAttribute('data-no-touch');
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line prefer-const
    let extraClasses = this.getAttribute('data-extra-classes');
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line prefer-const
    let externalControls = this.getAttribute('data-external-controls');
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line prefer-const
    let carouselClasses = ['carousel slide'];
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line eqeqeq
    extraClasses != undefined && extraClasses != null
      ? carouselClasses.push(extraClasses)
      : 0;
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line eqeqeq
    crossfade == 'true' ? carouselClasses.push('carousel-fade') : 0;
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line eqeqeq
    externalControls == 'true' ? carouselClasses.push('d-flex') : 0;
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line eqeqeq
    noTouch == 'false'
      ? this.carousel.setAttribute('data-bs-touch', 'false')
      : 0;
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line eqeqeq
    if (autoplay != undefined && autoplay != null) {
      // See CityOfDetroit/detroitmi#1099
      // eslint-disable-next-line eqeqeq
      autoplay == 'true'
        ? this.carousel.setAttribute('data-bs-ride', autoplay)
        : this.carousel.setAttribute('data-bs-ride', 'carousel');
    }
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line eqeqeq
    id != undefined && id != null ? (this.carousel.id = id) : 0;
    this.carousel.className = carouselClasses.join(' ');
    if (!this.shadowRoot.querySelector('div')) {
      this.shadowRoot.appendChild(this.carousel);
    }
  }

  disconnectedCallback() {
    this.removeEventListener('click', this._onClick.bind(this));
  }

  // See CityOfDetroit/detroitmi#1099
  // eslint-disable-next-line no-unused-vars
  _onClick(e) {
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line prefer-const
    let activeItem = this.getRootNode().host.getAttribute('data-active-item');
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line no-unused-vars, prefer-const
    let totalItems = this.getRootNode().host.getAttribute('data-total-items');
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line eqeqeq
    if (this.getAttribute('data-bs-slide') == undefined) {
      if (this.getAttribute('data-bs-slide-to') > activeItem) {
        this.getRootNode().host.setAttribute('data-direction', 'prev');
        this.getRootNode().host.setAttribute(
          'data-active-item',
          this.getAttribute('data-bs-slide-to'),
        );
      } else {
        this.getRootNode().host.setAttribute('data-direction', 'next');
        this.getRootNode().host.setAttribute(
          'data-active-item',
          this.getAttribute('data-bs-slide-to'),
        );
      }
    } else {
      // See CityOfDetroit/detroitmi#1099
      // eslint-disable-next-line prefer-const
      let activeItem = this.getRootNode().host.getAttribute('data-active-item');
      // See CityOfDetroit/detroitmi#1099
      // eslint-disable-next-line prefer-const
      let totalItems = this.getRootNode().host.getAttribute('data-total-items');
      // See CityOfDetroit/detroitmi#1099
      // eslint-disable-next-line eqeqeq
      if (this.getAttribute('data-bs-slide') == 'prev') {
        this.getRootNode().host.setAttribute('data-direction', 'prev');
        parseInt(activeItem) - 1 >= 0
          ? this.getRootNode().host.setAttribute(
              'data-active-item',
              parseInt(activeItem) - 1,
            )
          : this.getRootNode().host.setAttribute(
              'data-active-item',
              parseInt(totalItems) - 1,
            );
      } else {
        this.getRootNode().host.setAttribute('data-direction', 'next');
        parseInt(activeItem) + 1 < parseInt(totalItems)
          ? this.getRootNode().host.setAttribute(
              'data-active-item',
              parseInt(activeItem) + 1,
            )
          : this.getRootNode().host.setAttribute('data-active-item', 0);
      }
    }
  }
}
