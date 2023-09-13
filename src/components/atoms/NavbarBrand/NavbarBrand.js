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
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line prefer-const
    let url = this.getAttribute('data-url');
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line prefer-const
    let text = this.getAttribute('data-text');
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line prefer-const
    let brandImgURL = this.getAttribute('data-img');
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line prefer-const
    let brandImgAlt = this.getAttribute('data-img-alt');
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line prefer-const
    let textClasses = this.getAttribute('data-text-classes');
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line prefer-const
    let imgClasses = this.getAttribute('data-img-classes');
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line prefer-const
    let imgSize = this.getAttribute('data-img-size');
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line prefer-const
    let extraClasses = this.getAttribute('data-extra-classes');
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line prefer-const
    let brandClasses = [''];
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line prefer-const
    let brandLink = document.createElement('a');
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line prefer-const
    let cleanURL = encodeURI(url);
    brandLink.href = decodeURI(cleanURL);
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line eqeqeq
    if (brandImgURL != undefined && brandImgURL != null) {
      // See CityOfDetroit/detroitmi#1099
      // eslint-disable-next-line prefer-const
      let brandImg = document.createElement('img');
      // See CityOfDetroit/detroitmi#1099
      // eslint-disable-next-line prefer-const
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
      // See CityOfDetroit/detroitmi#1099
      // eslint-disable-next-line prefer-const
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
