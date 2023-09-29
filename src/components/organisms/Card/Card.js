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

    // TODO: See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line no-unused-vars
    shadow.addEventListener('slotchange', (e) => {
      // TODO: See CityOfDetroit/detroitmi#1099
      // eslint-disable-next-line prefer-const
      let tempElements = Array.from(this.children);
      tempElements.forEach((node) => {
        switch (node.tagName) {
          case 'COD-CARD-HEADER':
            // TODO: See CityOfDetroit/detroitmi#1099
            // eslint-disable-next-line no-case-declarations, prefer-const
            let tempHeader = document.createElement('div');
            // TODO: See CityOfDetroit/detroitmi#1099
            // eslint-disable-next-line no-case-declarations, prefer-const
            let tempHeaderClasses = ['card-header'];
            // TODO: See CityOfDetroit/detroitmi#1099
            // eslint-disable-next-line eqeqeq
            node.getAttribute('data-extra-classes') != undefined &&
            // TODO: See CityOfDetroit/detroitmi#1099
            // eslint-disable-next-line eqeqeq
            node.getAttribute('data-extra-classes') != null
              ? tempHeaderClasses.push(node.getAttribute('data-extra-classes'))
              : 0;
            tempHeader.className = tempHeaderClasses.join(' ');
            tempHeader.appendChild(node);
            this.card.appendChild(tempHeader);
            break;

          case 'COD-CARD-BODY':
            // TODO: See CityOfDetroit/detroitmi#1099
            // eslint-disable-next-line no-case-declarations, prefer-const
            let tempBody = document.createElement('div');
            // TODO: See CityOfDetroit/detroitmi#1099
            // eslint-disable-next-line no-case-declarations, prefer-const
            let tempBodyClasses = ['card-body'];
            // TODO: See CityOfDetroit/detroitmi#1099
            // eslint-disable-next-line eqeqeq
            node.getAttribute('data-extra-classes') != undefined &&
            // TODO: See CityOfDetroit/detroitmi#1099
            // eslint-disable-next-line eqeqeq
            node.getAttribute('data-extra-classes') != null
              ? tempHeaderClasses.push(node.getAttribute('data-extra-classes'))
              : 0;
            tempBody.className = tempBodyClasses.join(' ');
            tempBody.appendChild(node);
            this.card.appendChild(tempBody);
            break;

          case 'COD-CARD-FOOTER':
            // TODO: See CityOfDetroit/detroitmi#1099
            // eslint-disable-next-line no-case-declarations, prefer-const
            let tempFooter = document.createElement('div');
            // TODO: See CityOfDetroit/detroitmi#1099
            // eslint-disable-next-line no-case-declarations, prefer-const
            let tempFooterClasses = ['card-footer'];
            // TODO: See CityOfDetroit/detroitmi#1099
            // eslint-disable-next-line eqeqeq
            node.getAttribute('data-extra-classes') != undefined &&
            // TODO: See CityOfDetroit/detroitmi#1099
            // eslint-disable-next-line eqeqeq
            node.getAttribute('data-extra-classes') != null
              ? tempFooterClasses.push(node.getAttribute('data-extra-classes'))
              : 0;
            tempFooter.className = tempFooterClasses.join(' ');
            tempFooter.appendChild(node);
            this.card.appendChild(tempFooter);
            break;

          case 'COD-CARD-OVERLAY':
            // TODO: See CityOfDetroit/detroitmi#1099
            // eslint-disable-next-line no-case-declarations, prefer-const
            let tempOverlay = document.createElement('div');
            // TODO: See CityOfDetroit/detroitmi#1099
            // eslint-disable-next-line no-case-declarations, prefer-const
            let tempOverlayClasses = ['card-img-overlay'];
            // TODO: See CityOfDetroit/detroitmi#1099
            // eslint-disable-next-line eqeqeq
            node.getAttribute('data-extra-classes') != undefined &&
            // TODO: See CityOfDetroit/detroitmi#1099
            // eslint-disable-next-line eqeqeq
            node.getAttribute('data-extra-classes') != null
              ? tempOverlayClasses.push(node.getAttribute('data-extra-classes'))
              : 0;
            tempOverlay.className = tempOverlayClasses.join(' ');
            tempOverlay.appendChild(node);
            this.card.appendChild(tempOverlay);
            break;

          default:
            // TODO: See CityOfDetroit/detroitmi#1099
            // eslint-disable-next-line no-case-declarations, prefer-const
            let nodeClasses = node.className.split(' ');
            nodeClasses.includes('no-wc')
              ? node.remove()
              : this.card.appendChild(node);
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
    // TODO: See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line prefer-const
    let width = this.getAttribute('data-width');
    // TODO: See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line prefer-const
    let id = this.getAttribute('data-id');
    // TODO: See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line prefer-const
    let extraClasses = this.getAttribute('data-extra-classes');
    // TODO: See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line prefer-const
    let cardClasses = ['card'];
    // TODO: See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line eqeqeq
    extraClasses != undefined && extraClasses != null
      ? cardClasses.push(extraClasses)
      : 0;
    // TODO: See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line eqeqeq
    width != undefined && width != null ? (this.card.style.width = width) : 0;
    // TODO: See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line eqeqeq
    id != undefined && id != null ? (this.card.id = id) : 0;
    this.card.className = cardClasses.join(' ');
    if (!this.shadowRoot.querySelector('div')) {
      this.shadowRoot.appendChild(this.card);
    }
  }
}
