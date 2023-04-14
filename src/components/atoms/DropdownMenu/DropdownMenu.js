import styles from '!!raw-loader!./DropdownMenu.css';
import varStyles from '!!raw-loader!../../../shared/variables.css';
import bootstrapStyles from '!!raw-loader!../../../shared/themed-bootstrap.css';

const template = document.createElement('template');

template.innerHTML = `
<slot></slot>
`;


export default class DropdownMenu extends HTMLElement {

    static get observedAttributes() {
        return ['data-show'];
    }

    constructor() {
      // Always call super first in constructor
      super();
      // Create a shadow root
      const shadow = this.attachShadow({ mode: 'open' });
      shadow.appendChild(template.content.cloneNode(true));
      this.dropdownMenu = document.createElement('ul');
      this.shadowRoot.addEventListener( 'slotchange', ev => {  
        let tempElements = Array.from(this.children);  
        tempElements.forEach((node)=>{
          this.dropdownMenu.append(node);
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
      let darkMode = this.getAttribute('data-dark-mode');
      let direction = this.getAttribute('data-direction');
      let show = this.getAttribute('data-show');
      (darkMode == 'true') ? darkMode = 'dropdown-menu-dark' : darkMode = null;
      (show == 'true') ? show = 'show' : show = null;
      if(direction != undefined && direction != null){
        direction = `dropdown-menu-${direction}`;
      }else{
        direction = null;
      }
      this.dropdownMenu.className = ['dropdown-menu', `${show || ''}`, `${direction || ''}`, `${show || ''}`,].join(' ');
      
      if(!this.shadowRoot.querySelector('ul')){
        this.shadowRoot.appendChild(this.dropdownMenu);
      }
    }
};