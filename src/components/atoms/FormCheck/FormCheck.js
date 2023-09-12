import styles from '!!raw-loader!./FormCheck.css';
import varStyles from '!!raw-loader!../../../shared/variables.css';
import bootstrapStyles from '!!raw-loader!../../../shared/themed-bootstrap.css';
export default class FormCheck extends HTMLElement {
  static formAssociated = true;

  static get observedAttributes() {
    return ['data-invalid', 'data-checked', 'data-required'];
  }

  constructor() {
    // Always call super first in constructor
    super();
    // Create a shadow root
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line no-unused-vars
    const shadow = this.attachShadow({ mode: 'open' });
    this.internals = this.attachInternals();
    this.container = document.createElement('div');
    this.formCheck = document.createElement('input');
    this.formCheckLabel = null;
    this.invalid = false;
    this.pristine = true;
  }

  attributeChangedCallback(name, oldValue, newValue) {
    let tempClasses = this.formCheck.className.split(' ');
    let popValue = tempClasses.pop();
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line eqeqeq
    popValue != 'is-invalid' ? tempClasses.push(popValue) : 0;

    switch (newValue) {
      case 'true':
        switch (name) {
          case 'data-invalid':
            tempClasses.push('is-invalid');
            this.formCheck.className = tempClasses.join(' ');
            break;

          case 'data-checked':
            this.formCheck.checked = true;
            this.formCheck.setAttribute('aria-checked', 'true');
            break;

          case 'data-required':
            this.formCheck.required = true;
            this.validateInput();
            break;

          default:
            break;
        }
        break;

      case 'false':
        switch (name) {
          case 'data-invalid':
            this.formCheck.className = tempClasses.join(' ');
            break;

          case 'data-checked':
            this.formCheck.checked = false;
            this.formCheck.setAttribute('aria-checked', 'false');
            break;

          case 'data-required':
            this.formCheck.required = false;
            this.validateInput();
            break;

          default:
            break;
        }
        break;

      default:
        break;
    }
  }

  connectedCallback() {
    // Checkbox/Radio attributes setup
    let dataType = this.getAttribute('data-type');
    let id = this.getAttribute('data-id');
    let value = this.getAttribute('data-value');
    let checkName = this.getAttribute('data-name');
    let disabled = this.getAttribute('data-disabled');
    let required = this.getAttribute('data-required');
    let checked = this.getAttribute('data-checked');
    let mode = this.getAttribute('data-mode');
    let noLabel = this.getAttribute('data-nolabel');
    let labelTxt = this.getAttribute('data-label');
    let extraClasses = this.getAttribute('data-extra-classes');
    let backgroundColor = this.getAttribute('data-background-color');
    let btnColor = this.getAttribute('data-btn-color');
    // Set formcheck
    this.formCheck.id = id;
    this.formCheck.type = dataType;
    this.formCheck.value = value;
    this.formCheck.name = checkName;
    this.formCheck.setAttribute('autocomplete', 'off');
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line eqeqeq
    if (required == 'true') {
      this.formCheck.setAttribute('required', true);
    }
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line eqeqeq
    if (checked == 'true') {
      this.formCheck.checked = true;
      this.formCheck.setAttribute('aria-checked', 'true');
    } else {
      this.formCheck.setAttribute('aria-checked', 'false');
    }
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line eqeqeq
    if (disabled == 'true') {
      this.formCheck.setAttribute('disabled', true);
    }
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line eqeqeq
    if (mode == 'switch') {
      this.formCheck.setAttribute('role', mode);
    }
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line eqeqeq
    if (mode == 'btn' || mode == 'btn-outline') {
      this.formCheck.className = 'btn-check';
      mode = null;
    } else {
      this.formCheck.className = 'form-check-input';
    }

    if (!this.shadowRoot.querySelector('div')) {
      // setting up styles
      const bootStyles = document.createElement('style');
      bootStyles.textContent = bootstrapStyles;
      const variableStyles = document.createElement('style');
      variableStyles.textContent = varStyles;
      const formCheckStyles = document.createElement('style');
      formCheckStyles.textContent = styles;
      this.shadowRoot.appendChild(bootStyles);
      this.shadowRoot.appendChild(variableStyles);
      this.shadowRoot.appendChild(formCheckStyles);

      // Set checkbox/radio mode
      this.container.className = [
        'form-check',
        `form-${mode || ''}`,
        `bg-${backgroundColor || ''}`,
        `${extraClasses || ''}`,
      ].join(' ');
      this.container.appendChild(this.formCheck);

      // Adding label to check/radio
      // See CityOfDetroit/detroitmi#1099
      // eslint-disable-next-line eqeqeq
      if (noLabel != 'true') {
        const checkLabel = document.createElement('label');
        checkLabel.setAttribute('for', id);
        checkLabel.innerText = labelTxt;
        if (
          // See CityOfDetroit/detroitmi#1099
          // eslint-disable-next-line eqeqeq
          this.getAttribute('data-mode') == 'btn' || // See CityOfDetroit/detroitmi#1099
          // eslint-disable-next-line eqeqeq
          this.getAttribute('data-mode') == 'btn-outline'
        ) {
          checkLabel.className = `btn ${this.getAttribute(
            'data-mode',
          )}-${btnColor}`;
        }
        this.container.appendChild(checkLabel);
      }

      // Adding container to root
      this.shadowRoot.appendChild(this.container);
    }
    this.formCheck.addEventListener('change', (e) => {
      // we also want to dispatch a `change` event from
      // our custom element
      this.setAttribute('data-invalid', false);
      const clone = new e.constructor(e.type, e);
      this.dispatchEvent(clone);
      // set the element’s validity whenever the value of the
      // <input> changes
      this.validateInput();
    });

    this.addEventListener('invalid', (e) => {
      this.invalid = true;
      this.pristine = false;
      this.setAttribute('data-invalid', true);
      // when a custom error needs to be displayed,
      // prevent the native error from showing
      if (this.customErrorDisplay) {
        e.preventDefault();
      }
    });

    this.addEventListener('focus', () => this.formCheck.focus());
    if (!this.hasAttribute('tabindex')) {
      this.setAttribute('tabindex', -1);
    }

    this.validateInput();
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
    const validState = this.formCheck.validity;
    // reset this.invalid before validating again
    this.invalid = false;

    // if the input is invalid, show the correct error
    if (!validState.valid) {
      // loop through the error reasons
      for (let state in validState) {
        // get the name of the data attribute that holds the
        //error message
        const attr = `data-${state.toString()}`;
        // if there is an error and corresponding attribute holding
        // the message
        if (validState[state]) {
          this.validationError = state.toString();
          this.invalid = !this.pristine && !validState.valid;

          // get the correct error message
          const errorMessage = this.hasAttribute(attr)
            ? this.getAttribute(attr)
            : this.formCheck.validationMessage;
          // set the validity error reason and the corresponding
          // message
          this.internals.setValidity(
            { [this.validationError]: true },
            errorMessage,
          );
          // when a custom error needs to be displayed,
          // dispatch the 'invalid' event manually so consuming code
          // can use this as a hook to get the correct error message
          // and display it
          if (this.invalid && this.customErrorDisplay) {
            this.dispatchEvent(new Event('invalid'));
          }
        }
      }
    } else {
      this.internals.setValidity({});
      this.setAttribute('data-invalid', false);
    }
  }
}
