// Import the styles
import './DocTables.css';

export class SlotsTable extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._slots = [];
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
        console.log('Attempting to assign data: ', newValue);
        this._slots = JSON.parse(newValue);
        if (!Array.isArray(this._slots)) {
          console.error('Data attribute must be a JSON array.');
          this._slots = [];
        }
      } catch (e) {
        console.error('Error parsing slots JSON:', e);
        this._slots = [];
      }
      this.render();
    }
  }

  get data() {
    return this._slots;
  }

  set data(value) {
    if (Array.isArray(value)) {
      this._slots = value;
      this.render();
      return;
    } 

    try {
      // Make sure we have a valid array
      this._slots = JSON.parse(value);
      if (!Array.isArray(this._slots)) {
        console.error('Slots data property must be an array. Received: ', value);
        this._slots = [];
      }
    } catch (e) {
      console.error('Error parsing slots JSON:', e);
      this._slots = [];
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
      
      .doc-table .description-column {
        width: 80%;
      }
      
      .doc-table code {
        font-size: 13px;
        padding: 0.2em 0.4em;
        border-radius: 3px;
        background-color: #f1f5f9;
        font-family: monospace;
      }
      
      .doc-table .slot-default {
        font-style: italic;
      }
    `;

    let content;
    // Always check if this._slots is an array and has items
    if (!Array.isArray(this._slots) || this._slots.length === 0) {
      content = document.createElement('p');
      content.textContent = 'This component has no slots.';
    } else {
      // Create the table element
      const tableWrapper = document.createElement('div');
      tableWrapper.className = 'doc-table-wrapper';
      
      const table = document.createElement('table');
      table.className = 'doc-table slots-table';
      
      // Create the table header
      const thead = document.createElement('thead');
      const headerRow = document.createElement('tr');
      
      const nameHeader = document.createElement('th');
      nameHeader.className = 'name-column';
      nameHeader.textContent = 'Name';
      
      const descriptionHeader = document.createElement('th');
      descriptionHeader.className = 'description-column';
      descriptionHeader.textContent = 'Description';
      
      headerRow.appendChild(nameHeader);
      headerRow.appendChild(descriptionHeader);
      thead.appendChild(headerRow);
      table.appendChild(thead);
      
      // Create the table body
      const tbody = document.createElement('tbody');
      
      this._slots.forEach(slot => {
        const row = document.createElement('tr');
        
        const nameCell = document.createElement('td');
        nameCell.className = 'name-column';
        
        if (slot.name === '(default)') {
          const defaultSpan = document.createElement('span');
          defaultSpan.className = 'slot-default';
          defaultSpan.textContent = '(default)';
          nameCell.appendChild(defaultSpan);
        } else {
          const codeElement = document.createElement('code');
          codeElement.textContent = slot.name;
          nameCell.appendChild(codeElement);
        }
        
        const descriptionCell = document.createElement('td');
        descriptionCell.className = 'description-column';
        descriptionCell.textContent = slot.description;
        
        row.appendChild(nameCell);
        row.appendChild(descriptionCell);
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
customElements.define('doc-slots-table', SlotsTable);