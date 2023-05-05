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
    this.carouselInner = document.createElement('div');
    this.carouselInner.className = 'carousel-inner';
    this.carouselPrev = document.createElement('button');
    this.carouselNext = document.createElement('button');
    this.carousel.appendChild(this.carouselInner);
    if(this.getAttribute('data-no-controls') != 'true'){
        this.carouselPrev.className = 'carousel-control-prev';
        this.carouselPrev.type = 'button';
        this.carouselPrev.setAttribute('data-bs-target', `#${this.getAttribute('data-id')}`);
        this.carouselPrev.setAttribute('data-bs-slide', 'prev');
        let prevIcon = document.createElement('span');
        prevIcon.className = 'carousel-control-prev-icon';
        prevIcon.setAttribute('aria-hidden', 'true');
        this.carouselPrev.appendChild(prevIcon);
        let prevText = document.createElement('span');
        prevText.className = 'visually-hidden';
        prevText.innerText = 'Previous';
        this.carouselPrev.appendChild(prevText);
        this.carouselNext.className = 'carousel-control-next';
        this.carouselNext.type = 'button';
        this.carouselNext.setAttribute('data-bs-target', `#${this.getAttribute('data-id')}`);
        this.carouselNext.setAttribute('data-bs-slide', 'next');
        let nextIcon = document.createElement('span');
        nextIcon.className = 'carousel-control-next-icon';
        nextIcon.setAttribute('aria-hidden', 'true');
        this.carouselNext.appendChild(nextIcon);
        let nextText = document.createElement('span');
        nextText.className = 'visually-hidden';
        nextText.innerText = 'Next';
        this.carouselNext.appendChild(nextText);

        // Adding event listener to controls
        this.carouselPrev.addEventListener('click', this._onClick);
        this.carouselNext.addEventListener('click', this._onClick);
        this.carousel.appendChild(this.carouselPrev);
        this.carousel.appendChild(this.carouselNext);
    }
  
    shadow.addEventListener('slotchange', e => {
      let tempElements = Array.from(this.children);
      (tempElements.length) ? this.setAttribute('data-total-items', tempElements.length) : 0;
      tempElements.forEach((node, index) => {
        if(node.tagName == 'COD-CAROUSEL-ITEM'){
            let tempItem = document.createElement('div');
            tempItem.setAttribute('data-index', index);
            if(node.getAttribute('data-active') == 'true'){
                tempItem.className = 'carousel-item active';
                this.setAttribute('data-active-item', index);
            }else{
                tempItem.className = 'carousel-item';
            }
            (node.getAttribute('data-interval') != undefined && node.getAttribute('data-interval') != null) ? tempItem.setAttribute('data-bs-interval', node.getAttribute('data-interval')) : 0;
            tempItem.appendChild(node);
            this.carouselInner.appendChild(tempItem);
            if(this.getAttribute('data-indicator') == 'true'){
                let tempIndicator = document.createElement('button');
                tempIndicator.type = 'button';
                tempIndicator.setAttribute('data-bs-target', `#${this.getAttribute('data-id')}`);
                tempIndicator.setAttribute('data-bs-slide-to', index);
                tempIndicator.setAttribute('aria-label', `Slide ${index}`);
                if(node.getAttribute('data-active') == 'true'){
                    tempIndicator.className = 'active';
                    tempIndicator.setAttribute('aria-current', 'true');
                }
                this.carouselIndicators.appendChild(tempIndicator);
                this.carousel.appendChild(this.carouselIndicators);
            }
        }
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
    console.log(oldValue);
    console.log(newValue);
    if(oldValue != null){
        let oldItem = this.carouselInner.querySelector(`[data-index="${oldValue}"`);
        oldItem.querySelector('cod-carousel-item').setAttribute('data-active', 'false');
        oldItem.className = 'carousel-item active carousel-item-start';
        let newItem = this.carouselInner.querySelector(`[data-index="${newValue}"`);
        newItem.querySelector('cod-carousel-item').setAttribute('data-active', 'true');
        newItem.className = 'carousel-item carousel-item-next';
        setTimeout(() => {  
            oldItem.className = 'carousel-item';
            newItem.className = 'carousel-item active';
        }, 1000);
    }
  }

  connectedCallback() {
    // Modal attributes
    let captions = this.getAttribute('data-captions');
    let id = this.getAttribute('data-id');
    let crossfade = this.getAttribute('data-crossfade');
    let autoplay = this.getAttribute('data-autoplay');
    let noTouch = this.getAttribute('data-no-touch');
    let extraClasses = this.getAttribute('data-extra-classes');
    let carouselClasses = ['carousel slide'];
    (extraClasses != undefined && extraClasses != null) ? carouselClasses.push(extraClasses) : 0;
    (crossfade == 'true') ? carouselClasses.push('carousel-fade') : 0;
    (noTouch == 'false') ? this.carousel.setAttribute('data-bs-touch', 'false') : 0;
    if(autoplay != undefined && autoplay != null){
        (autoplay == 'true') ? this.carousel.setAttribute('data-bs-ride', autoplay) : this.carousel.setAttribute('data-bs-ride', 'carousel');
    }
    (id != undefined && id != null) ? this.carousel.id = id : 0;
    this.carousel.className = carouselClasses.join(' ');
    if (!this.shadowRoot.querySelector('div')) {
      this.shadowRoot.appendChild(this.carousel);
    }
  }

  disconnectedCallback() {
    this.removeEventListener('click', this._onClick.bind(this));
  }

  _onClick(e) {
    console.log(this);
    console.log(this.getRootNode().host);
    let activeItem = this.getRootNode().host.getAttribute('data-active-item');
    let totalItems = this.getRootNode().host.getAttribute('data-total-items');
    if(this.getAttribute('data-bs-slide') == 'prev'){
        ((parseInt(activeItem) - 1) >= 0) ? this.getRootNode().host.setAttribute('data-active-item', (parseInt(activeItem) - 1)) : this.getRootNode().host.setAttribute('data-active-item', (parseInt(totalItems) - 1));
    }else{
        ((parseInt(activeItem) + 1) < parseInt(totalItems)) ? this.getRootNode().host.setAttribute('data-active-item', (parseInt(activeItem) + 1)) : this.getRootNode().host.setAttribute('data-active-item', 0);
    }
    // this.getRootNode().host.setAttribute('data-show', 'false');
  }
};