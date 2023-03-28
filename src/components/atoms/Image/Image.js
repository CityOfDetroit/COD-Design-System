import styles from '!!raw-loader!./Image.css';
import varStyles from '!!raw-loader!../../../shared/variables.css';
import bootstrapStyles from '!!raw-loader!../../../shared/themed-bootstrap.css';
export default class Image extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();
    // Create a shadow root
    const shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    // setting up styles
    const bootStyles = document.createElement('style');
    bootStyles.textContent = bootstrapStyles;
    const variableStyles = document.createElement('style');
    variableStyles.textContent = varStyles;
    const imageStyles = document.createElement('style');
    imageStyles.textContent = styles;
    this.shadowRoot.appendChild(bootStyles);
    this.shadowRoot.appendChild(variableStyles);
    this.shadowRoot.appendChild(imageStyles);
    // image attributes
    let source = this.getAttribute('data-source');
    let sources = JSON.parse(this.getAttribute('data-sources'));
    let imgSize = this.getAttribute('data-size');
    let imgAlign = this.getAttribute('data-align');
    let backgroundColor = this.getAttribute('data-background-color');
    let imgStyle = this.getAttribute('data-style');
    let imgAlt = this.getAttribute('data-alt');
    const image = document.createElement('picture');
    const imageImg = document.createElement('img');
    imageImg.className = [`img-${imgSize || ''}`, `${imgStyle || ''}`, `float-${imgAlign || ''}`, `bg-${backgroundColor || ''}`].join(' ');
    imageImg.alt = imgAlt;
    imageImg.src = source;
    imageImg.loading = 'lazy';
    this.buildSources(sources, image);
    image.appendChild(imageImg);
    this.shadowRoot.appendChild(image);
  }

  buildSources(sources , image) {
    sources.forEach(source => {
        let tempSource = document.createElement('source');
        tempSource.srcset = source.srcset;
        tempSource.type = source.type;
        tempSource.media = source.media;
        image.appendChild(tempSource);
    });
  }
};