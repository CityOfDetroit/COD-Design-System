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
            if(node.tagName == 'cod-accordion-header'){
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
      (hAlignment != undefined && hAlignment != null) ? navClasses.push(`justify-content-${hAlignment}`): 0;
      (extraClasses != undefined && extraClasses != null) ? navClasses.push(extraClasses): 0;
      this.nav.className = navClasses.join(' ');
      if(!this.shadowRoot.querySelector('ul')){
        this.shadowRoot.appendChild(this.nav);
      }
    }
};