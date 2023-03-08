import styles from '!!raw-loader!./AlertStyles.css';
import varStyles from '!!raw-loader!../../shared/variables.css';
import bootstrapStyles from '!!raw-loader!../../shared/themed-bootstrap.css';
import bootstrapIcons from '!!raw-loader!bootstrap-icons/font/bootstrap-icons.css';
import * as DOMPurify from 'dompurify';
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
    let iconSize = this.getAttribute('data-icon-size');
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
    if (markup != undefined && markup != null) {
      if (icon != 'undefined' && icon != null) {
        let activeIcon = document.createElement('cod-icon');
        activeIcon.setAttribute('data-icon', icon);
        activeIcon.setAttribute('data-size', iconSize);
        let elemets = this.buildElements(markup);
        let iconContainer = document.createElement('p');
        iconContainer.appendChild(activeIcon);
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
        let elemets = this.buildElements(markup, alert);
      }
    } else {
      alert.innerText = text;
    }
    this.shadowRoot.appendChild(alert);
  }

  buildElements(element , alert) {
    if(alert != null || alert != undefined){
      element.forEach(el => {
        let tempElement = document.createElement(el.tag);
        tempElement.className = `${el.classes || ''}`;
        tempElement.innerHTML = DOMPurify.sanitize(el.content);
        alert.appendChild(tempElement);
      });
    }else{
      let tempElement = document.createElement(element.tag);
      tempElement.className = `${element.classes || ''}`;
      tempElement.innerHTML = DOMPurify.sanitize(element.content);
      return tempElement;
    }
  }
};