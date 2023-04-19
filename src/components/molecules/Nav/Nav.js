import styles from '!!raw-loader!./Nav.css';
import varStyles from '!!raw-loader!../../../shared/variables.css';
import bootstrapStyles from '!!raw-loader!../../../shared/themed-bootstrap.css';

const template = document.createElement('template');

template.innerHTML = `
<slot></slot>
`;


export default class Nav extends HTMLElement {

    constructor() {
      // Always call super first in constructor
      super();
      // Create a shadow root
      const shadow = this.attachShadow({ mode: 'open' });
      shadow.appendChild(template.content.cloneNode(true));
      this.nav = document.createElement('ul');
      this.shadowRoot.addEventListener( 'slotchange', ev => {  
        let tempElements = Array.from(this.children);  
        tempElements.forEach((node)=>{
          let navItem = document.createElement('li');
          navItem.className = 'nav-item';
          navItem.appendChild(node);
          this.nav.append(navItem);
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
      let vertical = this.getAttribute('data-vertical');
      let hAlignment = this.getAttribute('data-horizontal-alignment');
      let tabs = this.getAttribute('data-tabs');
      let pills = this.getAttribute('data-pills');
      let underline = this.getAttribute('data-underline');
      let fill = this.getAttribute('data-fill');
      let justified = this.getAttribute('data-justified');
      let extraClasses = this.getAttribute('data-extra-classes');
      let navClasses = ['nav'];
      (vertical == 'true') ? navClasses.push('flex-column'): 0;
      (tabs == 'true') ? navClasses.push('nav-tabs'): 0;
      (pills == 'true') ? navClasses.push('nav-pills'): 0;
      (underline == 'true') ? navClasses.push('nav-underline'): 0;
      (fill == 'true') ? navClasses.push('nav-fill'): 0;
      (justified == 'true') ? navClasses.push('nav-justified'): 0;
      (hAlignment != undefined && hAlignment != null) ? navClasses.push(`justify-content-${hAlignment}`): 0;
      (extraClasses != undefined && extraClasses != null) ? navClasses.push(extraClasses): 0;
      this.nav.className = navClasses.join(' ');
      if(!this.shadowRoot.querySelector('ul')){
        this.shadowRoot.appendChild(this.nav);
      }
    }
};