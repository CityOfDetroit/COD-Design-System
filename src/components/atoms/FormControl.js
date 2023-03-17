import styles from '!!raw-loader!./FormControlStyles.css';
import varStyles from '!!raw-loader!../../shared/variables.css';
import bootstrapStyles from '!!raw-loader!../../shared/themed-bootstrap.css';
export default class FormControl extends HTMLElement {
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
    const formControlsStyles = document.createElement('style');
    formControlsStyles.textContent = styles;
    this.shadowRoot.appendChild(bootStyles);
    this.shadowRoot.appendChild(variableStyles);
    this.shadowRoot.appendChild(formControlsStyles);
    // progress attributes
    let inputType = this.getAttribute('data-tag')
    let dataType = this.getAttribute('data-type');
    let id = this.getAttribute('data-id');
    let placeholderTxt = this.getAttribute('data-placeholder-txt');
    let readOnly = this.getAttribute('data-read-only');
    let disabled = this.getAttribute('data-disabled');
    let plainText = this.getAttribute('data-plain-txt');
    let required = this.getAttribute('data-required');
    let rows = this.getAttribute('data-rows');
    let size = this.getAttribute('data-size');
    let value = this.getAttribute('data-value');
    let backgroundColor = this.getAttribute('data-background-color');
    const formControl = document.createElement(inputType);
    formControl.id = id;
    formControl.placeholder = placeholderTxt;
    if(required == 'true'){
      formControl.setAttribute('required', true);
    }
    if(inputType != 'textarea'){
        formControl.type = dataType;
    }
    if(rows != 'undefined' && rows != 'null'){
        formControl.setAttribute('rows', rows);
    }
    if(value != 'undefined' && value != 'null'){
        formControl.value = value;
    }
    if(readOnly != 'undefined' && readOnly != 'null'){
        formControl.setAttribute('readonly', true);
    }
    if(disabled != 'undefined' && disabled != 'null'){
        formControl.setAttribute('disabled', true);
    }
    let colorPicker;
    (dataType == 'color') ? colorPicker = dataType : colorPicker = '';
    formControl.className = ['form-control', `form-control-${size || ''}`, `form-control-${colorPicker || ''}`, `bg-${backgroundColor || ''}`, `form-control-${plainText || ''}`].join(' ');
    this.shadowRoot.appendChild(formControl);
  }
};