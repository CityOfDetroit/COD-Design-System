import styles from '!!raw-loader!./Navbar.css';
import varStyles from '!!raw-loader!../../../shared/variables.css';
import bootstrapStyles from '!!raw-loader!../../../shared/themed-bootstrap.css';

const template = document.createElement('template');

template.innerHTML = `
<slot></slot>
`;


export default class Navbar extends HTMLElement {
  static get observedAttributes() {
    return ['data-show'];
  }

  constructor() {
    // Always call super first in constructor
    super();
    // Create a shadow root
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(template.content.cloneNode(true));
    this.navbar = document.createElement('nav');
    this.navbarContainer = document.createElement('div');
    this.navbarToggle = document.createElement('div');
    this.navbarBrand = document.createElement('div');
    this.navbarCollapse = document.createElement('div');
    shadow.addEventListener('slotchange', e => {
      let tempElements = Array.from(this.children);
      tempElements.forEach((node) => {
        switch (node.tagName) {
          case 'COD-NAVBAR-TOGGLE':
            (this.getAttribute('data-target-toggle') == 'offcanvas') ? node.setAttribute('data-target-toggle', 'offcanvas') : 0;
            (this.getAttribute('data-show') == 'true') ? node.setAttribute('data-show', true) : 0;
            (this.getAttribute('data-button-dark') == 'true') ? node.setAttribute('data-button-dark', true) : 0;
            this.navbarToggle.appendChild(node);
            break;

          case 'COD-NAVBAR-COLLAPSE':
            this.navbarCollapse.appendChild(node);
            break;

          case 'COD-NAVBAR-BRAND':
            this.navbarBrand.appendChild(node);
            break;

          case 'COD-OFFCANVAS':
            this.navbarContainer.appendChild(node);
            break;

          default:
            break;
        }
      });
    });
    this.navbarContainer.appendChild(this.navbarBrand);
    this.navbarContainer.appendChild(this.navbarToggle);

    this.navbarContainer.appendChild(this.navbarCollapse);
    this.navbar.appendChild(this.navbarContainer);

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
    this.navbarToggle.querySelector('cod-navbar-toggle').setAttribute('data-show', newValue);
    this.navbarToggle.setAttribute('aria-expanded', newValue);
    if(this.navbarCollapse.querySelector('cod-navbar-collapse')){
      let tempClasses = this.navbarCollapse.className.split(' ');
      let popValue = tempClasses.pop();
      (popValue != 'show') ? tempClasses.push(popValue) : 0;
      if (newValue == 'true') {
        tempClasses.push('show');
      }
      this.navbarCollapse.className = tempClasses.join(' ');
    }
  }

  connectedCallback() {
    // Navbar attributes
    let expand = this.getAttribute('data-expand');
    let id = this.getAttribute('data-id');
    let show = this.getAttribute('data-show');
    let placement = this.getAttribute('data-position');
    let extraClasses = this.getAttribute('data-extra-classes');
    let containerClasses = this.getAttribute('data-container-classes');
    let collapseClasses = this.getAttribute('data-collapse-classes');
    let navbarClasses = ['navbar'];
    let navbarContainerClasses = [''];
    let navbarCollapseClasses = ['collapse navbar-collapse'];
    let navbarBrandClasses = ['navbar-brand'];
    let navbarToogleClasses = ['navbar-toggler'];
    (containerClasses != undefined && containerClasses != null) ? navbarContainerClasses.push(containerClasses) : 0;
    (extraClasses != undefined && extraClasses != null) ? navbarClasses.push(extraClasses) : 0;
    (collapseClasses != undefined && collapseClasses != null) ? navbarCollapseClasses.push(collapseClasses) : 0;
    (placement != undefined && placement != null) ? navbarClasses.push(placement) : 0;
    if (expand != undefined && expand != null) {
      (expand == 'always') ? navbarClasses.push('navbar-expand') : navbarClasses.push(`navbar-expand-${expand}`);
    }
    if (show == 'true') {
      this.navbarCollapseClasses.push('show');
      this.navbarToggle.setAttribute('aria-expanded', `true`);
    } else {
      this.navbarToggle.setAttribute('aria-expanded', `false`);
    }
    if (id != undefined && id != null) {
      this.navbar.id = id;
      this.navbarCollapse.id = `${id}-collapse`;
      this.navbarToggle.setAttribute('data-bs-target', `#${id}-collapse`);
      this.navbarToggle.setAttribute('aria-control', `${id}-collapse`);
      this.navbarToggle.setAttribute('aria-label', `${id} toggle navigation`);
    }
    this.navbar.className = navbarClasses.join(' ');
    this.navbarContainer.className = navbarContainerClasses.join(' ');
    this.navbarBrand.className = navbarBrandClasses.join(' ');
    this.navbarToggle.className = navbarToogleClasses.join(' ');
    this.navbarToggle.setAttribute('data-bs-toggle', 'collapse');
    this.navbarCollapse.className = navbarCollapseClasses.join(' ');
    if (!this.shadowRoot.querySelector('div')) {
      this.shadowRoot.appendChild(this.navbar);
    }
  }
};