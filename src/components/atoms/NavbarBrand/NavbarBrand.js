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
    let extraClasses = this.getAttribute('data-extra-classes');
    let brandClasses = [''];
    let brandLink = document.createElement('a');
    brandLink.href = url;
    if(brandImgURL != undefined && brandImgURL != null){
        let brandImg = document.createElement('img');
        brandImg.src = brandImgURL;
        brandImg.setAttribute('alt', brandImgAlt);
        brandLink.appendChild(brandImg);
    }
    if(text != undefined && text != null){
        let brandText = document.createElement('span');
        brandText.innerText = text;
        brandLink.appendChild(brandText);
    }
    (extraClasses != undefined && extraClasses != null) ? brandClasses.push(extraClasses): 0;
    brandLink.className = brandClasses.join(' ');
    if(!this.shadowRoot.querySelector('a')){
      this.shadowRoot.appendChild(brandLink);
    }
  }
};