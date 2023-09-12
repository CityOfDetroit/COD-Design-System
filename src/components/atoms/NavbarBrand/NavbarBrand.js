import styles from '!!raw-loader!./NavbarBrand.css';
import varStyles from '!!raw-loader!../../../shared/variables.css';
import bootstrapStyles from '!!raw-loader!../../../shared/themed-bootstrap.css';

export default class NavbarBrand extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();
    // Create a shadow root
    const shadow = this.attachShadow({ mode: 'open' });

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
    // Navbar Brand attributes
    let url = this.getAttribute('data-url');
    let text = this.getAttribute('data-text');
    let brandImgURL = this.getAttribute('data-img');
    let brandImgAlt = this.getAttribute('data-img-alt');
    let textClasses = this.getAttribute('data-text-classes');
    let imgClasses = this.getAttribute('data-img-classes');
    let imgSize = this.getAttribute('data-img-size');
    let extraClasses = this.getAttribute('data-extra-classes');
    let brandClasses = [''];
    let brandLink = document.createElement('a');
    let cleanURL = encodeURI(url);
    brandLink.href = decodeURI(cleanURL);
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line eqeqeq
    if (brandImgURL != undefined && brandImgURL != null) {
      let brandImg = document.createElement('img');
      let cleanImgURL = encodeURI(brandImgURL);
      brandImg.src = decodeURI(cleanImgURL);
      // See CityOfDetroit/detroitmi#1099
      // eslint-disable-next-line eqeqeq
      imgSize != undefined && imgSize != null
        ? brandImg.setAttribute('width', imgSize)
        : 0;
      // See CityOfDetroit/detroitmi#1099
      // eslint-disable-next-line eqeqeq
      imgClasses != undefined && imgClasses != null
        ? (brandImg.className = imgClasses)
        : 0;
      brandImg.setAttribute('alt', brandImgAlt);
      brandLink.appendChild(brandImg);
    }
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line eqeqeq
    if (text != undefined && text != null) {
      let brandText = document.createElement('span');
      // See CityOfDetroit/detroitmi#1099
      // eslint-disable-next-line eqeqeq
      textClasses != undefined && textClasses != null
        ? (brandText.className = textClasses)
        : 0;
      brandText.innerText = text;
      brandLink.appendChild(brandText);
    }
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line eqeqeq
    extraClasses != undefined && extraClasses != null
      ? brandClasses.push(extraClasses)
      : 0;
    brandLink.className = brandClasses.join(' ');
    if (!this.shadowRoot.querySelector('a')) {
      this.shadowRoot.appendChild(brandLink);
    }
  }
}
