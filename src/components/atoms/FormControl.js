import styles from '!!raw-loader!./FormControlStyles.css';
import varStyles from '!!raw-loader!../../shared/variables.css';
import bootstrapStyles from '!!raw-loader!../../shared/themed-bootstrap.css';
export default class FormControl extends HTMLElement {
  static formAssociated = true;

  static get observedAttributes() {
    return ['data-invalid'];
  }

  constructor() {
    // Always call super first in constructor
    super();
    // Create a shadow root
    this.invalid = false;
    this.pristine = true;
    const shadow = this.attachShadow({ mode: 'open' });
    this.internals = this.attachInternals();

    // setting up styles
    const bootStyles = document.createElement('style');
    bootStyles.textContent = bootstrapStyles;
    const variableStyles = document.createElement('style');
    variableStyles.textContent = varStyles;
    const formControlsStyles = document.createElement('style');
    formControlsStyles.textContent = styles;
    shadow.appendChild(bootStyles);
    shadow.appendChild(variableStyles);
    shadow.appendChild(formControlsStyles);
    // progress attributes
    let inputType = this.getAttribute('data-tag');
    let dataType = this.getAttribute('data-type');
    let id = this.getAttribute('data-id');
    let placeholderTxt = this.getAttribute('data-placeholder-txt');
    let readOnly = this.getAttribute('data-read-only');
    let plainText = this.getAttribute('data-plain-txt');
    let rows = this.getAttribute('data-rows');
    let size = this.getAttribute('data-size');
    let value = this.getAttribute('data-value');
    let backgroundColor = this.getAttribute('data-background-color');
    this.formControl = document.createElement(inputType);
    this.formControl.id = id;
    this.formControl.placeholder = placeholderTxt;
    if(inputType != 'textarea'){
        this.formControl.type = dataType;
    }
    if(rows != 'undefined' && rows != 'null'){
        this.formControl.setAttribute('rows', rows);
    }
    if(value != 'undefined' && value != 'null'){
        this.formControl.value = value;
    }
    if(readOnly == 'true'){
        this.formControl.setAttribute('readonly', true);
    }
    let colorPicker;
    (dataType == 'color') ? colorPicker = dataType : colorPicker = '';
    this.formControl.className = ['form-control', `form-control-${size || ''}`, `form-control-${colorPicker || ''}`, `bg-${backgroundColor || ''}`, `form-control-${plainText || ''}`].join(' ');
    shadow.appendChild(this.formControl);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(`Name: ${name}, Old: ${oldValue}, New: ${newValue}`);
    let tempClasses = this.formControl.className.split(' ');
    let popValue = tempClasses.pop();
    (popValue != 'is-invalid') ? tempClasses.push(popValue) : 0;

    switch (newValue) {
      case 'true':
        tempClasses.push('is-invalid');
        this.formControl.className = tempClasses.join(' ');
        break;
      
      case 'false':
        this.formControl.className = tempClasses.join(' ');
        break;
    
      default:
        break;
    }
    
  }

  connectedCallback() {
    this.formControl = this.shadowRoot.querySelector(this.getAttribute('data-tag'));
    // set the required properties (constraints) on the internal
    // <input>
    [
      'type',
      'value',
      'placeholder',
      'required',
      'disabled',
      'min',
      'max',
      'minLength',  // <-- camelCase!
      'maxLength',  // <-- camelCase!
      'pattern'
    ].forEach((attr) => {
      const attrValue = attr === 'required' ? this.hasAttribute(attr) : ( (attr === 'disabled') ? this.hasAttribute(attr) : this.getAttribute(attr));
      
      if(attrValue !== null && attrValue !== undefined) {
        this.formControl[attr] = attrValue;
      }
    });

    this.formControl.addEventListener('change', (e) => {
      if(this.validateOnChange) {
        this.pristine = false;
      }
      this.setAttribute('data-invalid', false);
      // we also want to dispatch a `change` event from
      // our custom element
      const clone = new e.constructor(e.type, e);
      this.dispatchEvent(clone);

      // set the element's validity whenever the value of the
      // <input> changes
      this.validateInput();
    });

    this.addEventListener('invalid', (e) => {
      this.invalid = true;
      this.pristine = false;
      this.setAttribute('data-invalid', true);
      // when a custom error needs to be displayed, 
      // prevent the native error from showing
      if(this.customErrorDisplay) {
        e.preventDefault();
      }
    });

    this.addEventListener('focus', () => {
      this.formControl.focus();
    });

    if (!this.hasAttribute('tabindex')) {
      this.setAttribute('tabindex', '0');
    }

    // set the initial validity of the component
    this.validateInput();
  }

  get customErrorDisplay() {
    return this.hasAttribute('custom-error-display');
  }

  get validateOnChange() {
    return this.hasAttribute('validate-on-change');
  }

  get invalid() {
    return this.hasAttribute('invalid');
  }

  set invalid(isInvalid) {
    isInvalid && this.customErrorDisplay ? this.setAttribute('invalid', '') : this.removeAttribute('invalid');
  }

  get value() {
    return this.formControl.value;
  }

  set value(value) {
    this.formControl.value = value;
    this.internals.setFormValue(value);
  }

  get form() {
    return this.internals.form;
  }

  get name() {
    return this.getAttribute('name');
  }

  get type() {
    return this.localName;
  }
  get validity() {
    return this.internals.validity;
  }

  get validationMessage() {
    return this.internals.validationMessage;
  }
  get willValidate() {
    return this.internals.willValidate;
  }
  checkValidity() {
    return this.internals.checkValidity();
  }
  reportValidity() {
    return this.internals.reportValidity();
  }

  validateInput() {
    // get the validity of the internal <input>
    const validState = this.formControl.validity;

    // reset this.invalid before validating again
    this.invalid = false;

    // if the input is invalid, show the correct error
    if(!validState.valid) {
      // loop through the error reasons
      for(let state in validState) {
        // get the name of the data attribute that holds the
        //error message
        const attr = `data-${state.toString()}`;
        // if there is an error and corresponding attribute holding
        // the message
        if(validState[state]) {
          this.validationError = state.toString();
          this.invalid = !this.pristine && !validState.valid;

          // get the correct error message
          const errorMessage = this.hasAttribute(attr) ?
            this.getAttribute(attr) : this.formControl.validationMessage;
          // set the validity error reason and the corresponding
          // message
          this.internals.setValidity(
            {[this.validationError]: true},
            errorMessage
          );
          // when a custom error needs to be displayed, 
          // dispatch the 'invalid' event manually so consuming code
          // can use this as a hook to get the correct error message 
          // and display it
          if(this.invalid && this.customErrorDisplay) {
            this.dispatchEvent(new Event('invalid'));
          }
        }
      }
    }
    else {
      this.internals.setValidity({});
    }
  }
};