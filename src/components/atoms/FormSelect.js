import styles from '!!raw-loader!./FormSelectStyles.css';
import varStyles from '!!raw-loader!../../shared/variables.css';
import bootstrapStyles from '!!raw-loader!../../shared/themed-bootstrap.css';
export default class FormSelect extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();
    // Create a shadow root
    const shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    // setting up styles
    const bootStyles = document.createElement('style');
    bootStyles.textContent = bootstrapStyles;
    const variableStyles = document.createElement('style');
    variableStyles.textContent = varStyles;
    const formSelectStyles = document.createElement('style');
    formSelectStyles.textContent = styles;
    this.shadowRoot.appendChild(bootStyles);
    this.shadowRoot.appendChild(variableStyles);
    this.shadowRoot.appendChild(formSelectStyles);
    // progress attributes
    let id = this.getAttribute('data-id')
    let size = this.getAttribute('data-size');
    let multiple = this.getAttribute('data-multiple');
    let displayMultiple = this.getAttribute('data-display-multiple');
    let disabled = this.getAttribute('data-disabled');
    let required = this.getAttribute('data-required');
    let ariaLabel = this.getAttribute('data-aria-label');
    let options = this.getAttribute('data-options');
    let extraClasses = this.getAttribute('data-extra-classes');
    const select = document.createElement('select');
    if(required == 'true') {
        select.setAttribute('required', true);
    }
    if(disabled == 'true') {
        select.setAttribute('disabled', true);
    }
    if(multiple == 'true') {
        select.setAttribute('multiple', true);
    }
    if(displayMultiple != 'undefined' && displayMultiple != 'null'){
        select.setAttribute('size', displayMultiple);
    }
    select.setAttribute('aria-label', ariaLabel);
    select.id = id;
    select.className = ['form-select', `${extraClasses || ''}`, `form-select-${size || ''}`].join(' ');
    this.buildOptions(JSON.parse(options), select);
    this.shadowRoot.appendChild(select);
  }

  buildOptions(options, select){
    options.forEach(opt => {
        let tempOpt = document.createElement('option');
        if(opt.default != true){
            tempOpt.value = opt.value;
        }
        tempOpt.innerText = opt.text;
        select.appendChild(tempOpt);
    });
  }
};