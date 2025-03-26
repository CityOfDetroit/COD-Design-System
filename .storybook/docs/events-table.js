// Import the styles
import './DocTables.css';

export class EventsTable extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._events = [];
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
        this._events = JSON.parse(newValue);
        if (!Array.isArray(this._events)) {
          console.error('Data attribute must be a JSON array.');
          this._events = [];
        }
      } catch (e) {
        console.error('Error parsing events JSON:', e);
        this._events = [];
      }
      this.render();
    }
  }

  get data() {
    return this._events;
  }

  set data(value) {
    if (Array.isArray(value)) {
      this._events = value;
      this.render();
      return;
    } 

    try {
      // Make sure we have a valid array
      this._events = JSON.parse(value);
      if (!Array.isArray(this._events)) {
        console.error('Events data property must be an array. Received: ', value);
        this._events = [];
      }
    } catch (e) {
      console.error('Error parsing events JSON:', e);
      this._events = [];
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
        width: 60%;
      }
      
      .doc-table .detail-column {
        width: 20%;
      }
      
      .doc-table code {
        font-size: 13px;
        padding: 0.2em 0.4em;
        border-radius: 3px;
        background-color: #f1f5f9;
        font-family: monospace;
      }
    `;

    let content;
    // Always check if this._events is an array and has items
    if (!Array.isArray(this._events) || this._events.length === 0) {
      content = document.createElement('p');
      content.textContent = 'This component does not emit any events.';
    } else {
      // Create the table element
      const tableWrapper = document.createElement('div');
      tableWrapper.className = 'doc-table-wrapper';
      
      const table = document.createElement('table');
      table.className = 'doc-table events-table';
      
      // Create the table header
      const thead = document.createElement('thead');
      const headerRow = document.createElement('tr');
      
      const nameHeader = document.createElement('th');
      nameHeader.className = 'name-column';
      nameHeader.textContent = 'Name';
      
      const descriptionHeader = document.createElement('th');
      descriptionHeader.className = 'description-column';
      descriptionHeader.textContent = 'Description';
      
      const detailHeader = document.createElement('th');
      detailHeader.className = 'detail-column';
      detailHeader.textContent = 'Event Detail';
      
      headerRow.appendChild(nameHeader);
      headerRow.appendChild(descriptionHeader);
      headerRow.appendChild(detailHeader);
      thead.appendChild(headerRow);
      table.appendChild(thead);
      
      // Create the table body
      const tbody = document.createElement('tbody');
      
      this._events.forEach(event => {
        const row = document.createElement('tr');
        
        const nameCell = document.createElement('td');
        nameCell.className = 'name-column';
        const codeElement = document.createElement('code');
        codeElement.textContent = event.name;
        nameCell.appendChild(codeElement);
        
        const descriptionCell = document.createElement('td');
        descriptionCell.className = 'description-column';
        descriptionCell.textContent = event.description;
        
        const detailCell = document.createElement('td');
        detailCell.className = 'detail-column';
        
        if (event.detail === '-') {
          detailCell.textContent = '-';
        } else {
          const detailCode = document.createElement('code');
          detailCode.textContent = event.detail;
          detailCell.appendChild(detailCode);
        }
        
        row.appendChild(nameCell);
        row.appendChild(descriptionCell);
        row.appendChild(detailCell);
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
customElements.define('doc-events-table', EventsTable);