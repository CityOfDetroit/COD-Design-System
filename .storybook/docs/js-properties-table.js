// Import the styles
import './DocTables.css';

export class JSPropertiesTable extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._properties = [];
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
        this._properties = JSON.parse(newValue);
        if (!Array.isArray(this._properties)) {
          console.error('Data attribute must be a JSON array.');
          this._properties = [];
        }
      } catch (e) {
        console.error('Error parsing JS properties JSON:', e);
        this._properties = [];
      }
      this.render();
    }
  }

  get data() {
    return this._properties;
  }

  set data(value) {
    if (Array.isArray(value)) {
      this._properties = value;
      this.render();
      return;
    } 

    try {
      // Make sure we have a valid array
      this._properties = JSON.parse(value);
      if (!Array.isArray(this._properties)) {
        console.error('JS properties data property must be an array. Received: ', value);
        this._properties = [];
      }
    } catch (e) {
      console.error('Error parsing JS properties JSON:', e);
      this._properties = [];
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
      
      .doc-table-wrapper {
        overflow-x: auto;
        margin-bottom: 2rem;
      }
      
      .doc-table {
        width: 100%;
        border-collapse: collapse;
        font-size: 14px;
        line-height: 1.5;
      }
      
      .doc-table th,
      .doc-table td {
        text-align: left;
        padding: 0.75rem 1rem;
        border: 1px solid #e2e8f0;
      }
      
      .doc-table th {
        background-color: #f8fafc;
        font-weight: 600;
      }
      
      .doc-table tr:nth-child(even) {
        background-color: #f8fafc;
      }
      
      .doc-table .name-column {
        white-space: nowrap;
        width: 20%;
      }
      
      .doc-table .type-column {
        width: 20%;
      }
      
      .doc-table .default-column {
        width: 15%;
      }
      
      .doc-table .description-column {
        width: 45%;
      }
      
      .doc-table code {
        font-size: 13px;
        padding: 0.2em 0.4em;
        border-radius: 3px;
        background-color: #f1f5f9;
        font-family: monospace;
      }
      
      .doc-table .doc-tag {
        display: inline-block;
        font-size: 11px;
        font-weight: 600;
        padding: 0.1em 0.5em;
        border-radius: 12px;
        background-color: #e2e8f0;
        color: #475569;
        margin-left: 0.5rem;
        vertical-align: middle;
      }
    `;

    let content;
    // Always check if this._properties is an array and has items
    if (!Array.isArray(this._properties) || this._properties.length === 0) {
      content = document.createElement('p');
      content.textContent = 'This component does not expose any HTML attributes or JavaScript properties.';
      content.className = 'doc-empty-message';
    } else {
      // Create the table element
      const tableWrapper = document.createElement('div');
      tableWrapper.className = 'doc-table-wrapper';
      
      const table = document.createElement('table');
      table.className = 'doc-table js-properties-table';
      
      // Create the table header
      const thead = document.createElement('thead');
      const headerRow = document.createElement('tr');
      
      const nameHeader = document.createElement('th');
      nameHeader.className = 'name-column';
      nameHeader.textContent = 'Name';
      
      const typeHeader = document.createElement('th');
      typeHeader.className = 'type-column';
      typeHeader.textContent = 'Type';
      
      const defaultHeader = document.createElement('th');
      defaultHeader.className = 'default-column';
      defaultHeader.textContent = 'Default';
      
      const descriptionHeader = document.createElement('th');
      descriptionHeader.className = 'description-column';
      descriptionHeader.textContent = 'Description';

      headerRow.appendChild(nameHeader);
      headerRow.appendChild(descriptionHeader);
      headerRow.appendChild(typeHeader);
      headerRow.appendChild(defaultHeader);
      thead.appendChild(headerRow);
      table.appendChild(thead);
      
      // Create the table body
      const tbody = document.createElement('tbody');
      
      this._properties.forEach(prop => {
        const row = document.createElement('tr');
        
        // Name cell
        const nameCell = document.createElement('td');
        nameCell.className = 'name-column';
        const nameCode = document.createElement('code');
        nameCode.textContent = prop.name;
        nameCell.appendChild(nameCode);
        
        // Add readonly tag if necessary
        if (prop.readonly) {
          const readonlyTag = document.createElement('span');
          readonlyTag.className = 'doc-tag';
          readonlyTag.textContent = 'readonly';
          nameCell.appendChild(readonlyTag);
        }

        // Add reflects tag if necessary
        if (prop.reflects) {
          const reflectsTag = document.createElement('span');
          reflectsTag.className = 'doc-tag';
          reflectsTag.textContent = 'reflects';
          nameCell.appendChild(reflectsTag);
        }
        
        // Type cell
        const typeCell = document.createElement('td');
        typeCell.className = 'type-column';
        const typeCode = document.createElement('code');
        typeCode.textContent = prop.type || 'any';
        typeCell.appendChild(typeCode);
        
        // Default value cell
        const defaultCell = document.createElement('td');
        defaultCell.className = 'default-column';
        
        if (prop.defaultValue !== undefined && prop.defaultValue !== null) {
          const defaultCode = document.createElement('code');
          defaultCode.textContent = prop.defaultValue;
          defaultCell.appendChild(defaultCode);
        } else {
          defaultCell.textContent = '-';
        }
        
        // Description cell
        const descriptionCell = document.createElement('td');
        descriptionCell.className = 'description-column';
        descriptionCell.textContent = prop.description || '';
        
        row.appendChild(nameCell);
        row.appendChild(descriptionCell);
        row.appendChild(typeCell);
        row.appendChild(defaultCell);
        tbody.appendChild(row);
      });
      
      table.appendChild(tbody);
      tableWrapper.appendChild(table);
      content = tableWrapper;
    }

    // Clear the shadow DOM
    this.shadowRoot.innerHTML = '';
    this.shadowRoot.appendChild(style);
    this.shadowRoot.appendChild(content);
  }
}

// Define the custom element
customElements.define('doc-js-properties-table', JSPropertiesTable);