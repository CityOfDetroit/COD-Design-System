import styles from '!!raw-loader!./AccordionItem.css';
import varStyles from '!!raw-loader!../../../shared/variables.css';
import bootstrapStyles from '!!raw-loader!../../../shared/themed-bootstrap.css';

const template = document.createElement('template');

template.innerHTML = `
<slot></slot>
`;

export default class AccordionItem extends HTMLElement {
  static get observedAttributes() {
      return ['data-expanded'];
  }

  constructor() {
    // Always call super first in constructor
    super();
    // Create a shadow root
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(template.content.cloneNode(true));
    this.accordionHeader = document.createElement('div');
    this.accordionBody = document.createElement('div');
    this.shadowRoot.addEventListener( 'slotchange', ev => {  
      let tempElements = Array.from(this.children);  
      tempElements.forEach((node)=>{
        node.setAttribute('data-parent-id', `${this.getAttribute('data-parent-id')}-${this.getAttribute('data-index')}`);
        (this.getAttribute('data-expanded') == 'true') ? node.setAttribute('data-expanded', true) : 0;
        if(node.tagName == 'COD-ACCORDION-HEADER'){
          this.accordionHeader.append(node);
        }else{
          this.accordionBody.append(node);
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

  attributeChangedCallback(name, oldValue, newValue) {
    this.accordionHeader.querySelector('cod-accordion-header').setAttribute('data-expanded', newValue);
    this.accordionBody.querySelector('cod-accordion-body').setAttribute('data-expanded', newValue);
    let tempClasses = this.accordionBody.className.split(' ');
    let popValue = tempClasses.pop();
    (popValue != 'show') ? tempClasses.push(popValue) : 0;
    if(newValue == 'true'){
      tempClasses.push('show');
    }
    this.accordionBody.className = tempClasses.join(' ');
  }

  connectedCallback() {
    // Nav attributes
    let parentID = this.getAttribute('data-parent-id');
    let index = this.getAttribute('data-index');
    let expanded = this.getAttribute('data-expanded');
    let alwaysOpen = this.getAttribute('data-always-open');
    let headerExtraClasses = this.getAttribute('data-header-extra-classes');
    let bodyExtraClasses = this.getAttribute('data-body-extra-classes');
    let accordionHeaderClasses = ['accordion-header'];
    let accordionBodyClasses = ['accordion-collapse collapse'];
    (expanded == 'true') ? accordionBodyClasses.push('show'): 0;
    (headerExtraClasses != undefined && headerExtraClasses != null) ? accordionHeaderClasses.push(headerExtraClasses): 0;
    (bodyExtraClasses != undefined && bodyExtraClasses != null) ? accordionBodyClasses.push(bodyExtraClasses): 0;
    this.accordionHeader.className = accordionHeaderClasses.join(' ');
    this.accordionBody.className = accordionBodyClasses.join(' ');
    if(this.querySelector('cod-accordion-header')){
      this.querySelector('cod-accordion-header').addEventListener('click', this._onClick);
    }
    if(!this.shadowRoot.querySelector('ul')){
      this.shadowRoot.appendChild(this.accordionHeader);
      this.shadowRoot.appendChild(this.accordionBody);
    }
  }

  disconnectedCallback() {
    this.removeEventListener('click', this._onClick.bind(this));
  }

  _onClick(e) {
    if(e.target.getAttribute('data-expanded') == 'true'){
      this.getRootNode().host.setAttribute('data-expanded', 'false');
    }else{
      this.getRootNode().host.setAttribute('data-expanded', 'true');
    }
  }
};