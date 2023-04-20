import styles from '!!raw-loader!./AccordionHeader.css';
import varStyles from '!!raw-loader!../../../shared/variables.css';
import bootstrapStyles from '!!raw-loader!../../../shared/themed-bootstrap.css';

const template = document.createElement('template');

template.innerHTML = `
<slot></slot>
`;


export default class AccordionHeader extends HTMLElement {
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
    this.accordionBtn = document.createElement('button');
    this.accordionHeader.appendChild(this.accordionBtn);
    this.shadowRoot.addEventListener( 'slotchange', ev => {  
      let tempElements = Array.from(this.children);  
      tempElements.forEach((node)=>{
          this.accordionBtn.append(node);
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
    this.accordionBtn.setAttribute('aria-expanded', newValue);
    let tempClasses = this.accordionBtn.className.split(' ');
    let popValue = tempClasses.pop();
    (popValue != 'collapsed') ? tempClasses.push(popValue) : 0;
    if(newValue == 'false'){
      tempClasses.push('collapsed');
    }
    this.accordionBtn.className = tempClasses.join(' ');
  }

  connectedCallback() {
    // Nav attributes
    let parentID = this.getAttribute('data-parent-id');
    let expanded = this.getAttribute('data-expanded');
    let extraClasses = this.getAttribute('data-header-extra-classes');
    let accordionBtnClasses = ['accordion-button'];
    this.accordionBtn.setAttribute('type', 'button');
    this.accordionBtn.setAttribute('data-bs-toggle', 'collapse');
    this.accordionBtn.setAttribute('aria-controls', parentID);
    this.accordionBtn.setAttribute('data-bs-target', `#${parentID}`);
    if(expanded == 'true'){
      this.accordionBtn.setAttribute('aria-expanded', 'true');
    }else{
      accordionBtnClasses.push('collapsed');
      this.accordionBtn.setAttribute('aria-expanded', 'false');
    }
    (extraClasses != undefined && extraClasses != null) ? accordionBtnClasses.push(extraClasses): 0;
    this.accordionBtn.className = accordionBtnClasses.join(' ');
    if(!this.shadowRoot.querySelector('div')){
      this.shadowRoot.appendChild(this.accordionHeader);
    }
  }
};