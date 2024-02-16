import styles from '!!raw-loader!./InfoButton.css';
import varStyles from '!!raw-loader!../../../shared/variables.css';
import bootstrapStyles from '!!raw-loader!../../../shared/themed-bootstrap.css';

const template = document.createElement('template');

template.innerHTML = `
<div class="info-button-container">
  <a class="btn btn-primary" role="button" href="">
    <div class="card">
      <img src="" alt="" class="card-img-top img-fluid">
      <div class="card-body text-light">
        <div class="d-flex justify-content-between align-items-center">
          <div class="pe-3">
            <slot></slot>
          </div>
          <cod-icon data-icon="chevron-right-circle" data-size="medium"></cod-icon>
        </div>
      </div>
    </div>
  </a>
</div>
`;

class InfoButton extends HTMLElement {
  static observedAttributes = [];

  constructor() {
    // Always call super first in constructor
    super();
    // Create a shadow root
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(template.content.cloneNode(true));

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
    // Set the img for the top of the card.
    const imgSrc = this.getAttribute('img-src');
    const imgAlt = this.getAttribute('img-alt');
    const imgElt = this.shadowRoot.querySelector('img.card-img-top');
    imgElt.setAttribute('src', imgSrc);
    imgElt.setAttribute('alt', imgAlt);

    // Build the title section.
    this.buildTitleSection();

    // Set link attributes.
    const href = this.getAttribute('href');
    const target = this.getAttribute('target');
    const aElt = this.shadowRoot.querySelector('a');
    aElt.setAttribute('href', href);
    if (target) {
      aElt.setAttribute('target', target);
    }
  }

  buildTitleSection() {
    const titlePrim = this.getAttribute('title-primary');
    if (!titlePrim) {
      return;
    }

    const titleMultiline = this.getAttribute('force-title-multiline');
    const titleContainer = document.createElement('div');
    if (titleMultiline === null) {
      titleContainer.classList.add(
        'd-flex',
        'justify-content-between',
        'flex-wrap',
      );
    }

    const titlePrimElt = document.createElement('h5');
    titlePrimElt.innerText = titlePrim;
    titlePrimElt.classList.add('info-btn-title', 'me-2');
    titleContainer.appendChild(titlePrimElt);

    const titleSec = this.getAttribute('title-secondary');
    if (titleSec) {
      const titleSecElt = document.createElement('h5');
      titleSecElt.innerText = titleSec;
      titleSecElt.classList.add(
        'info-btn-title',
        'text-warning',
        titleMultiline !== null ? null : 'text-end',
      );
      titleContainer.appendChild(titleSecElt);
    }
    const cardBody = this.shadowRoot.querySelector('div.card-body');
    cardBody.prepend(titleContainer);
  }
}

export { InfoButton as default };
