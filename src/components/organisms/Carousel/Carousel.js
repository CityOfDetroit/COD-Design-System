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
    this.carouselPrev = document.createElement('button');
    this.carouselNext = document.createElement('button');
    this.carousel.appendChild(this.carouselIndicators);
    this.carousel.appendChild(this.carouselInner);
    this.carousel.appendChild(this.carouselPrev);
    this.carousel.appendChild(this.carouselNext);
  
    shadow.addEventListener('slotchange', e => {
      let tempElements = Array.from(this.children);
      tempElements.forEach((node, index) => {
        if('COD-CAROUSEL-ITEM'){
            let tempItem = document.createElement('div');
            tempItem.setAttribute('data-index', index);
            (node.getAttribute('data-active') == 'true') ? tempItem.className = 'carousel-item active' : tempItem.className = 'carousel-item';
            tempItem.appendChild(node);
            this.carouselInner.appendChild(this.tempItem);
            if(this.getAttribute('data-indicator') == 'true'){
                let tempIndicator = document.createElement('button');

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
    let tempClasses = this.modal.className.split(' ');
    let popValue = tempClasses.pop();
    (popValue != 'show') ? tempClasses.push(popValue) : 0;
    if(newValue == 'true'){
      tempClasses.push('show');
      this.modal.style.display = 'block';
      if(this.getAttribute('data-static') != 'true'){
        this.modal.addEventListener('click', this._onClick);
      }
      this.modal.className = tempClasses.join(' ');
    }else{
      this.modal.className = tempClasses.join(' ');
      setTimeout(() => {  this.modal.style.display = 'none'; }, 500);
    }
    
  }

  connectedCallback() {
    // Modal attributes
    let bStatic = this.getAttribute('data-static');
    let id = this.getAttribute('data-id');
    let show = this.getAttribute('data-show');
    let verticalCentered = this.getAttribute('data-vertical-centered');
    let size = this.getAttribute('data-size');
    let fullScreen = this.getAttribute('data-full-screen');
    let extraClasses = this.getAttribute('data-extra-classes');
    let modalClasses = ['modal fade'];
    let modalDialogClasses = ['modal-dialog'];
    let modalContentClasses = ['modal-content'];
    (extraClasses != undefined && extraClasses != null) ? modalClasses.push(extraClasses) : 0;
    (size != undefined && size != null) ? modalDialogClasses.push(`modal-${size}`) : 0;
    (verticalCentered == 'true') ? modalDialogClasses.push('modal-dialog-centered') : 0;
    if (fullScreen != undefined && fullScreen != null){
        (fullScreen == 'always') ? modalDialogClasses.push('modal-fullscreen') : modalDialogClasses.push(`modal-fullscreen-${fullScreen}-down`);
    }
    if (bStatic == 'true'){
        this.modal.setAttribute('data-bs-backdrop', 'static');
        this.modal.setAttribute('data-bs-keyboard', 'false');
    }
    if (show == 'true') {
      this.modalClasses.push('show');
      this.modal.setAttribute('aria-modal', `true`);
    } else {
      this.modal.setAttribute('aria-modal', `false`);
    }
    (id != undefined && id != null) ? this.modal.id = id : 0;
    this.modal.setAttribute('tabindex', -1);
    this.modal.className = modalClasses.join(' ');
    this.modalDialog.className = modalDialogClasses.join(' ');
    this.modalContent.className = modalContentClasses.join(' ');
    if (!this.shadowRoot.querySelector('div')) {
      this.shadowRoot.appendChild(this.modal);
    }
  }

  disconnectedCallback() {
    this.removeEventListener('click', this._onClick.bind(this));
  }

  _onClick(e) {
    this.getRootNode().host.setAttribute('data-show', 'false');
  }
};