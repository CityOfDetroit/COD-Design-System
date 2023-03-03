import styles from '!!raw-loader!./AlertStyles.css';
import varStyles from '!!raw-loader!../../shared/variables.css';
import bootstrapStyles from '!!raw-loader!bootstrap/dist/css/bootstrap.min.css';
import bootstrapIcons from '!!raw-loader!bootstrap-icons/font/bootstrap-icons.css';
export default class Container extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();
    // Create a shadow root
    const shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const bootIcons = document.createElement('style');
    bootIcons.textContent = bootstrapIcons;
    const bootStyles = document.createElement('style');
    bootStyles.textContent = bootstrapStyles;
    const variableStyles = document.createElement('style');
    variableStyles.textContent = varStyles;
    const alertStyles = document.createElement('style');
    alertStyles.textContent = styles;
    this.shadowRoot.appendChild(bootStyles);
    this.shadowRoot.appendChild(bootIcons);
    this.shadowRoot.appendChild(variableStyles);
    this.shadowRoot.appendChild(alertStyles);
    // alert attributes
    let icon = this.getAttribute('data-icon');
    let iconOrder = this.getAttribute('data-icon-order');
    let text = this.getAttribute('data-text');
    let markup = null;
    if (this.getAttribute('data-elements') != null) {
      markup = JSON.parse(this.getAttribute('data-elements'));
    }
    let backgroundColor = this.getAttribute('data-background-color');
    let extraClasses = this.getAttribute('data-extra-classes');
    const alert = document.createElement('div');
    alert.role = 'alert';
    alert.className = ['alert', `alert-${backgroundColor || ''}`, `${extraClasses || ''}`].join(' ');
    if (markup != undefined) {
      if (icon != 'undefined') {
        let activeIcon = null;
        switch (icon) {
          case 'info':
            activeIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle-fill" viewBox="0 0 16 16">
                  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
                </svg>`;
            break;

          case 'success':
            activeIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                  <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
                </svg>`;
            break;

          case 'warning':
            activeIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-triangle" viewBox="0 0 16 16">
                  <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"/>
                  <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z"/>
                </svg>`;
            break;

          default:
            break;
        }
        let elemets = this.buildElements(markup);
        let iconContainer = document.createElement('p');
        iconContainer.innerHTML = activeIcon;
        let iconContentBox = document.createElement('div');
        let contentBox = document.createElement('div');
        contentBox.className = 'col';
        iconContentBox.className = 'd-flex';
        switch (iconOrder) {
          case 'left':
            iconContainer.className = 'pe-2 m-0'
            iconContentBox.appendChild(iconContainer);
            contentBox.appendChild(elemets);
            iconContentBox.appendChild(contentBox);
            alert.appendChild(iconContentBox);
            break;

          case 'right':
            iconContainer.className = 'ps-2 m-0'
            contentBox.appendChild(elemets);
            iconContentBox.appendChild(contentBox);
            iconContentBox.appendChild(iconContainer);
            alert.appendChild(iconContentBox);
            break;

          default:
            break;
        }
      } else {
        console.log('no icon');
        let elemets = this.buildElements(markup);
        alert.appendChild(elemets);
      }
    } else {
      alert.innerText = text;
    }
    this.shadowRoot.appendChild(alert);
  }

  buildElements(element) {
    let tempElement = document.createElement(element.tag);
    tempElement.innerHTML = element.content;
    return tempElement;
  }
};