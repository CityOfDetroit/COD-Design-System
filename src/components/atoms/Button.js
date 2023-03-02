import styles from '!!raw-loader!./ButtonStyles.css';
import varStyles from '!!raw-loader!../../shared/variables.css';
export default class Button extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();
    // Create a shadow root
    const shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const variableStyles = document.createElement('style');
    variableStyles.textContent = varStyles;
    this.shadowRoot.appendChild(variableStyles);
    const btnStyles = document.createElement('style');
    btnStyles.textContent = styles;
     // Button attributes
     let primary = this.getAttribute('data-primary');
     let mode = (primary == 'true') ? 'cod-button--primary' : 'cod-button--secondary';
     let backgroundColor = this.getAttribute('data-background-color');
     let shape = this.getAttribute('data-shape');
     let hover = this.getAttribute('data-hover');
     let hoverStatus = (hover == 'false') ? 'cod-button--not-hover' : 'cod-button--hover';
     let imgSrc = this.getAttribute('data-img');
     let imgAlt = this.getAttribute('data-img-alt');
     let img = (imgAlt != '') ? 'img' : 'not-img';
     let size = this.getAttribute('data-size');
     let label = this.getAttribute('data-label');
    this.shadowRoot.appendChild(btnStyles);
    const btnClick = this.btnClick;
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = ['cod-button', `cod-button--${size || 'medium'}`, `cod-button--${img}`, `cod-button--${backgroundColor}`, `cod-button--${shape || 'fluid'}`, hoverStatus, mode].join(' ');
    if(imgAlt != ''){
      btn.innerText = label;
      const btnIcon = document.createElement('img');
      btnIcon.src = imgSrc;
      btnIcon.setAttribute('alt', imgAlt);
      btn.appendChild(btnIcon);
    }else{
      btn.innerText = label;
    }
    this.shadowRoot.appendChild(btn);
  }
};