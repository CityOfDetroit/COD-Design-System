import styles from '!!raw-loader!./ContainerStyles.css';
import varStyles from '!!raw-loader!../../shared/variables.css';
import bootstrapStyles from '!!raw-loader!bootstrap/dist/css/bootstrap.min.css';

const template = document.createElement('template');

template.innerHTML = `
<slot></slot>
`;

export default class Container extends HTMLElement {
    constructor() {
      // Always call super first in constructor
      super();
      // Create a shadow root
      const shadow = this.attachShadow({ mode: 'open' });
      shadow.appendChild(template.content.cloneNode(true));
      this.container  = document.createElement('div');
      shadow.addEventListener( 'slotchange', ev => {  
        let tempElements = Array.from(this.children);  
        tempElements.forEach((node)=>{
          this.container.append(node);
        })
      });
    }
  
    connectedCallback() {
      const bootStyles = document.createElement('style');
      bootStyles.textContent = bootstrapStyles;
      const variableStyles = document.createElement('style');
      variableStyles.textContent = varStyles;
      const containerStyles = document.createElement('style');
      containerStyles.textContent = styles;
      this.shadowRoot.appendChild(bootStyles);
      this.shadowRoot.appendChild(variableStyles);
      this.shadowRoot.appendChild(containerStyles);
      // container attributes
      let type = this.getAttribute('data-type');
      let text = this.getAttribute('data-text');
      let backgroundColor = this.getAttribute('data-background-color');
      let extraClasses = this.getAttribute('data-extra-classes');
      this.container.className = [type, `${backgroundColor || ''}`, `${extraClasses || ''}`].join(' ');
      this.container.innerText = text;
      this.shadowRoot.appendChild(this.container);
    }
  };