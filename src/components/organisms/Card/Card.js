import styles from '!!raw-loader!./Card.css';
import varStyles from '!!raw-loader!../../../shared/variables.css';
import bootstrapStyles from '!!raw-loader!../../../shared/themed-bootstrap.css';

const template = document.createElement('template');

template.innerHTML = `
<slot></slot>
`;


export default class Card extends HTMLElement {

  constructor() {
    // Always call super first in constructor
    super();
    // Create a shadow root
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(template.content.cloneNode(true));
    this.card = document.createElement('div');
  
    shadow.addEventListener('slotchange', e => {
      let tempElements = Array.from(this.children);
      tempElements.forEach((node) => {
        switch (node.tagName) {
          case 'COD-CARD-HEADER':
            let tempHeader = document.createElement('div');
            let tempHeaderClasses = ['card-header'];
            (node.getAttribute('data-extra-classes') != undefined && node.getAttribute('data-extra-classes') != null) ? tempHeaderClasses.push(node.getAttribute('data-extra-classes')) : 0;
            tempHeader.className = tempHeaderClasses.join(' ');
            tempHeader.appendChild(node);
            this.card.appendChild(tempHeader);
            break;

          case 'COD-CARD-BODY':
            let tempBody = document.createElement('div');
            let tempBodyClasses = ['card-body'];
            (node.getAttribute('data-extra-classes') != undefined && node.getAttribute('data-extra-classes') != null) ? tempHeaderClasses.push(node.getAttribute('data-extra-classes')) : 0;
            tempBody.className = tempBodyClasses.join(' ');
            tempBody.appendChild(node);
            this.card.appendChild(tempBody);
            break;

          case 'COD-CARD-FOOTER':
            let tempFooter = document.createElement('div');
            let tempFooterClasses = ['card-footer'];
            (node.getAttribute('data-extra-classes') != undefined && node.getAttribute('data-extra-classes') != null) ? tempFooterClasses.push(node.getAttribute('data-extra-classes')) : 0;
            tempFooter.className = tempFooterClasses.join(' ');
            tempFooter.appendChild(node);
            this.card.appendChild(tempFooter);
            break;

          case 'COD-CARD-OVERLAY':
            let tempOverlay = document.createElement('div');
            let tempOverlayClasses = ['card-img-overlay'];
            (node.getAttribute('data-extra-classes') != undefined && node.getAttribute('data-extra-classes') != null) ? tempOverlayClasses.push(node.getAttribute('data-extra-classes')) : 0;
            tempOverlay.className = tempOverlayClasses.join(' ');
            tempOverlay.appendChild(node);
            this.card.appendChild(tempOverlay);
            break;

          default:
            this.card.appendChild(node);
            break;
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

  connectedCallback() {
    // Card attributes
    let width = this.getAttribute('data-width');
    let id = this.getAttribute('data-id');
    let extraClasses = this.getAttribute('data-extra-classes');
    let cardClasses = ['card'];
    (extraClasses != undefined && extraClasses != null) ? cardClasses.push(extraClasses) : 0;
    (width != undefined && width != null) ? this.card.style.width = width : 0;
    (id != undefined && id != null) ? this.card.id = id : 0;
    this.card.className = cardClasses.join(' ');
    if (!this.shadowRoot.querySelector('div')) {
      this.shadowRoot.appendChild(this.card);
    }
  }
};