import styles from '!!raw-loader!./BadgeStyles.css';
import varStyles from '!!raw-loader!../../shared/variables.css';
export default class Badge extends HTMLElement {
    constructor() {
      // Always call super first in constructor
      super();
      // Create a shadow root
      const shadow = this.attachShadow({ mode: 'open' });
    }
  
    connectedCallback() {
      const variableStyles = document.createElement('style');
      variableStyles.textContent = varStyles;
      const badgeStyles = document.createElement('style');
      badgeStyles.textContent = styles;
      this.shadowRoot.appendChild(variableStyles);
      this.shadowRoot.appendChild(badgeStyles);
       // badge attributes
       let tag = this.getAttribute('data-tag');
       let backgroundColor = this.getAttribute('data-background-color');
       let content = this.getAttribute('data-content');
       let url = this.getAttribute('data-url');
      let badge = null;
      if(url != ''){
        badge = document.createElement('a');
        badge.href = url;
      }else{
        badge = document.createElement(tag);
      }
      badge.innerText = content;
      badge.className = ['cod-badge', `cod-badge--${backgroundColor}`].join(' ');
      this.shadowRoot.appendChild(badge);
    }
  };