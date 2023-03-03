import styles from '!!raw-loader!./ContainerStyles.css';
import varStyles from '!!raw-loader!../../shared/variables.css';
import bootstrapStyles from '!!raw-loader!bootstrap/dist/css/bootstrap.min.css';
export default class Container extends HTMLElement {
    constructor() {
      // Always call super first in constructor
      super();
      // Create a shadow root
      const shadow = this.attachShadow({ mode: 'open' });
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
      let markup = null;
      if(this.getAttribute('data-elements') != null){
        markup = JSON.parse(this.getAttribute('data-elements'));
      }
      let backgroundColor = this.getAttribute('data-background-color');
      let extraClasses = this.getAttribute('data-extra-classes');
      const container = document.createElement('div');
      container.className = [type, `${backgroundColor || ''}`, `${extraClasses || ''}`].join(' ');
      if(markup != undefined){
        let elemets = this.buildElements(markup);
        container.appendChild(elemets);
      }else{
        container.innerText = text;
      }
      this.shadowRoot.appendChild(container);
    }

    buildElements(element) {
      let tempElement = document.createElement(element.tag);
      tempElement.innerHTML = element.content;
      return tempElement;
    }
  };