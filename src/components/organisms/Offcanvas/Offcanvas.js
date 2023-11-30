import styles from '!!raw-loader!./Offcanvas.css';
import varStyles from '!!raw-loader!../../../shared/variables.css';
import bootstrapStyles from '!!raw-loader!../../../shared/themed-bootstrap.css';

const template = document.createElement('template');

template.innerHTML = `
<slot></slot>
`;

export default class Offcanvas extends HTMLElement {
  static get observedAttributes() {
    return ['data-show'];
  }

  constructor() {
    // Always call super first in constructor
    super();
    // Create a shadow root
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(template.content.cloneNode(true));
    this.offcanvas = document.createElement('div');
    this.offcanvasBackdrop = document.createElement('div');
    // TODO: See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line no-unused-vars
    shadow.addEventListener('slotchange', (ev) => {
      // TODO: See CityOfDetroit/detroitmi#1099
      // eslint-disable-next-line prefer-const
      let tempElements = Array.from(this.children);
      tempElements.forEach((node) => {
        // TODO: See CityOfDetroit/detroitmi#1099
        // eslint-disable-next-line eqeqeq
        this.getAttribute('data-show') == 'true'
          ? node.setAttribute('data-show', true)
          : 0;
        // TODO: See CityOfDetroit/detroitmi#1099
        // eslint-disable-next-line eqeqeq
        if (node.tagName == 'COD-OFFCANVAS-HEADER') {
          // TODO: See CityOfDetroit/detroitmi#1099
          // eslint-disable-next-line eqeqeq
          this.getAttribute('data-button-dark') == 'true'
            ? node.setAttribute('data-button-dark', true)
            : 0;
          node.setAttribute('data-parent-id', this.getAttribute('data-id'));
        }
        const expand = this.getAttribute('data-expand');
        if (expand) {
          node.setAttribute('data-expand', expand);
        }
        // TODO: See CityOfDetroit/detroitmi#1099
        // eslint-disable-next-line prefer-const
        let nodeClasses = node.className.split(' ');
        nodeClasses.includes('no-wc')
          ? node.remove()
          : this.offcanvas.appendChild(node);
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
    // TODO: See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line prefer-const
    let tempClasses = this.offcanvas.className.split(' ');
    // TODO: See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line prefer-const
    let popValue = tempClasses.pop();
    // TODO: See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line eqeqeq
    popValue != 'show' ? tempClasses.push(popValue) : 0;
    // TODO: See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line eqeqeq
    if (newValue == 'true') {
      tempClasses.push('show');
      // TODO: See CityOfDetroit/detroitmi#1099
      // eslint-disable-next-line eqeqeq
      if (this.getAttribute('data-backdrop') != 'false') {
        // TODO: See CityOfDetroit/detroitmi#1099
        // eslint-disable-next-line eqeqeq
        if (this.getAttribute('data-static') != 'true') {
          this.offcanvasBackdrop.addEventListener('click', this._onClick);
        }
        this.shadowRoot.appendChild(this.offcanvasBackdrop);
      }
    } else {
      if (this.shadowRoot.querySelector('div.offcanvas-backdrop')) {
        this.shadowRoot.removeChild(this.offcanvasBackdrop);
      }
    }
    this.offcanvas.className = tempClasses.join(' ');
  }

  connectedCallback() {
    // Offcanvas attributes
    // TODO: See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line prefer-const
    let show = this.getAttribute('data-show');
    // TODO: See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line prefer-const
    let placement = this.getAttribute('data-placement');
    // TODO: See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line prefer-const
    let id = this.getAttribute('data-id');
    // TODO: See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line prefer-const
    let backdrop = this.getAttribute('data-backdrop');
    // TODO: See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line prefer-const
    let backdropExtraClasses = this.getAttribute('data-backdrop-extra-classes');
    // TODO: See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line prefer-const
    let scroll = this.getAttribute('data-scroll');
    // TODO: See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line prefer-const
    let bStatic = this.getAttribute('data-static');
    // TODO: See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line prefer-const
    let extraClasses = this.getAttribute('data-extra-classes');
    // TODO: See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line prefer-const
    let offcanvasClasses = ['offcanvas'];
    // TODO: See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line prefer-const
    let backdropClasses = ['offcanvas-backdrop fade show'];
    // TODO: See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line eqeqeq
    show == 'true' ? offcanvasClasses.push('show') : 0;
    // TODO: See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line eqeqeq
    backdrop == 'false'
      ? this.offcanvas.setAttribute('data-bs-backdrop', false)
      : 0;
    // TODO: See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line eqeqeq
    scroll == 'true' ? this.offcanvas.setAttribute('data-bs-scroll', true) : 0;
    // TODO: See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line eqeqeq
    bStatic == 'true'
      ? this.offcanvas.setAttribute('data-bs-backdrop', 'static')
      : 0;
    // TODO: See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line eqeqeq
    backdropExtraClasses != undefined && backdropExtraClasses != null
      ? backdropClasses.push(backdropExtraClasses)
      : 0;
    // TODO: See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line eqeqeq
    extraClasses != undefined && extraClasses != null
      ? offcanvasClasses.push(extraClasses)
      : 0;
    // TODO: See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line eqeqeq
    if (placement != undefined && placement != null) {
      offcanvasClasses.push(`offcanvas-${placement}`);
    } else {
      offcanvasClasses.push('offcanvas-start');
    }
    const expand = this.getAttribute('data-expand');
    if (expand) {
      expand === 'always'
        ? offcanvasClasses.push('navbar-expand')
        : offcanvasClasses.push(`navbar-expand-${expand}`);
    }
    // TODO: See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line eqeqeq
    if (id != undefined && id != null) {
      this.offcanvas.id = id;
      this.offcanvas.setAttribute('aria-labelledby', `${id}-label`);
    }
    this.offcanvas.setAttribute('tabindex', -1);
    this.offcanvas.className = offcanvasClasses.join(' ');
    this.offcanvasBackdrop.className = backdropClasses.join(' ');
    if (!this.shadowRoot.querySelector('div')) {
      this.shadowRoot.appendChild(this.offcanvas);
    }
  }

  disconnectedCallback() {
    this.removeEventListener('click', this._onClick.bind(this));
  }

  // TODO: See CityOfDetroit/detroitmi#1099
  // eslint-disable-next-line no-unused-vars
  _onClick(e) {
    this.getRootNode().host.setAttribute('data-show', 'false');
  }
}
