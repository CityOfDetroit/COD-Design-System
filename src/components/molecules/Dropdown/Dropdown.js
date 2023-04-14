import styles from '!!raw-loader!./Dropdown.css';
import varStyles from '!!raw-loader!../../../shared/variables.css';
import bootstrapStyles from '!!raw-loader!../../../shared/themed-bootstrap.css';

const template = document.createElement('template');

template.innerHTML = `
<slot></slot>
`;


export default class Dropdown extends HTMLElement {

    static get observedAttributes() {
        return ['data-show'];
    }

    constructor() {
      // Always call super first in constructor
      super();
      // Create a shadow root
      const shadow = this.attachShadow({ mode: 'open' });
      shadow.appendChild(template.content.cloneNode(true));
      this.dropdown = document.createElement('div');
      this.shadowRoot.addEventListener( 'slotchange', ev => {  
        let tempElements = Array.from(this.children);  
        tempElements.forEach((node)=>{
          this.dropdown.append(node);
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
      console.log(newValue);
    }
  
    connectedCallback() {
      // badge attributes
      let show = this.getAttribute('data-show');
      let split = this.getAttribute('data-split');
      (split == 'true') ? split = 'btn-group' : split = 'dropdown';
      this.dropdown.className = split;
      
      if(!this.shadowRoot.querySelector('div')){
        this.shadowRoot.appendChild(this.dropdown);
      }
    }
};