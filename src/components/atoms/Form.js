import styles from '!!raw-loader!./FormStyles.css';
import varStyles from '!!raw-loader!../../shared/variables.css';
import bootstrapStyles from '!!raw-loader!../../shared/themed-bootstrap.css';

const template = document.createElement('template');

template.innerHTML = `
<slot name="form-elements">
</slot>
`;


export default class Form extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();
        // Create a shadow root
        const root = this.attachShadow({ mode: 'open' });
        root.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        // setting up styles
        // const bootStyles = document.createElement('style');
        // bootStyles.textContent = bootstrapStyles;
        // const variableStyles = document.createElement('style');
        // variableStyles.textContent = varStyles;
        // const formStyles = document.createElement('style');
        // formStyles.textContent = styles;
        // this.shadowRoot.appendChild(bootStyles);
        // this.shadowRoot.appendChild(variableStyles);
        // this.shadowRoot.appendChild(formStyles);
        // progress attributes
        // let id = this.getAttribute('data-id');
        // let customValidation = this.getAttribute('data-custom-validate');
        // let backgroundColor = this.getAttribute('data-background-color');
        // let extraClasses = this.getAttribute('data-extra-classes');
        // this.form.id = id;
        // if(customValidation == 'true'){
        //     this.form.setAttribute('novalidate', true);
        // }
        // this.form.className = ['needs-validation', `bg-${backgroundColor || ''}`, `${extraClasses || ''}`].join(' ');
        // this.shadowRoot.appendChild(this.form);
    }

    addElement(element) {
        this.form.appendChild(element);
    }
};