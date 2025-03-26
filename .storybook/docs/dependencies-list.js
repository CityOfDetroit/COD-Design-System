// Import the styles
import './DocTables.css';

export class DependenciesList extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._dependencies = [];
  }

  static get observedAttributes() {
    return ['data'];
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'data' && newValue !== oldValue) {
      try {
        // Make sure we have a valid array
        this._dependencies = JSON.parse(newValue);
        if (!Array.isArray(this._dependencies)) {
          console.error('Data attribute must be a JSON array.');
          this._dependencies = [];
        }
      } catch (e) {
        console.error('Error parsing dependencies JSON:', e);
        this._dependencies = [];
      }
      this.render();
    }
  }

  get data() {
    return this._dependencies;
  }

  set data(value) {
    if (Array.isArray(value)) {
      this._dependencies = value;
      this.render();
      return;
    } 

    try {
      // Make sure we have a valid array
      this._dependencies = JSON.parse(value);
      if (!Array.isArray(this._dependencies)) {
        console.error('Dependencies data property must be an array. Received: ', value);
        this._dependencies = [];
      }
    } catch (e) {
      console.error('Error parsing dependencies JSON:', e);
      this._dependencies = [];
    }
    this.render();
  }

  render() {
    if (!this.shadowRoot) return;

    // Create a style element
    const style = document.createElement('style');
    style.textContent = `
      :host {
        display: block;
        margin-bottom: 2rem;
      }
      
      .doc-dependencies {
        margin-bottom: 2rem;
      }
      
      .doc-dependencies ul {
        padding-left: 1.5rem;
        margin-top: 0.5rem;
      }
      
      .doc-dependencies li {
        margin-bottom: 0.5rem;
      }
      
      .doc-dependencies code {
        font-size: 13px;
        padding: 0.2em 0.4em;
        border-radius: 3px;
        background-color: #f1f5f9;
        font-family: monospace;
      }
    `;

    let content;
    // Always check if this._dependencies is an array and has items
    if (!Array.isArray(this._dependencies) || this._dependencies.length === 0) {
      content = document.createElement('p');
      content.textContent = 'This component has no dependencies.';
    } else {
      const container = document.createElement('div');
      container.className = 'doc-dependencies';
      
      const paragraph = document.createElement('p');
      paragraph.textContent = 'This component automatically imports the following dependencies:';
      container.appendChild(paragraph);
      
      const list = document.createElement('ul');
      
      this._dependencies.forEach(dependency => {
        const item = document.createElement('li');
        
        if (dependency === 'None') {
          item.textContent = 'None';
        } else {
          const codeElement = document.createElement('code');
          codeElement.textContent = dependency;
          item.appendChild(codeElement);
        }
        
        list.appendChild(item);
      });
      
      container.appendChild(list);
      content = container;
    }

    // Clear the shadow DOM
    this.shadowRoot.innerHTML = '';
    this.shadowRoot.appendChild(style);
    this.shadowRoot.appendChild(content);
  }
}

// Define the custom element
customElements.define('doc-dependencies-list', DependenciesList);