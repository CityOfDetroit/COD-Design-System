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
    this.offcanvasHeader = document.createElement('div');
    this.offcanvasBody = document.createElement('div');
    this.shadowRoot.addEventListener( 'slotchange', ev => {  
      let tempElements = Array.from(this.children);  
      tempElements.forEach((node)=>{
        (this.getAttribute('data-show') == 'true') ? node.setAttribute('data-show', true) : 0;
        if(node.tagName == 'COD-OFFCANVAS-HEADER'){
          this.offcanvasHeader.append(node);
        }else{
          this.offcanvasBody.append(node);
        }
      });
    });
    this.offcanvas.appendChild(this.offcanvasHeader);
    this.offcanvas.appendChild(this.offcanvasBody);

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
    // Offcanvas attributes
    let placement = this.getAttribute('data-placement');
    let id = this.getAttribute('data-id');
    let backdrop = this.getAttribute('data-backdrop');
    let scroll = this.getAttribute('data-scroll');
    let static = this.getAttribute('data-static');
    let extraClasses = this.getAttribute('data-extra-classes');
    let offcanvasClasses = ['offcanvas'];
    let offcanvasHeaderClasses = ['offcanvas-header'];
    let offcanvasBodyClasses = ['offcanvas-body'];
    (size != undefined && size != null) ? offcanvasClasses.push(`pagination-${size}`): 0;
    (extraClasses != undefined && extraClasses != null) ? offcanvasClasses.push(extraClasses): 0;
    (id != undefined && id != null) ? this.offcanvas.id = id : 0;
    this.paginationContainer.setAttribute('aria-label', label);
    this.pagination.className = offcanvasClasses.join(' ');
    if(!this.shadowRoot.querySelector('nav')){
      this.shadowRoot.appendChild(this.paginationContainer);
    }
  }
};