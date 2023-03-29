import styles from '!!raw-loader!./Button.css';
import varStyles from '!!raw-loader!../../../shared/variables.css';
export default class Button extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();
    // Create a shadow root
    const shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    // Button attributes
    let link = this.getAttribute('data-link');
    let btnID = this.getAttribute('data-id');
    let ariaLabel = this.getAttribute('data-aria-label');
    let primary = this.getAttribute('data-primary');
    let mode = (primary == 'true') ? 'cod-button--primary' : 'cod-button--secondary';
    let backgroundColor = this.getAttribute('data-background-color');
    let shape = this.getAttribute('data-shape');
    let hover = this.getAttribute('data-hover');
    let hoverStatus = (hover == 'false') ? 'cod-button--not-hover' : 'cod-button--hover';
    let icon = this.getAttribute('data-icon');
    let iconSize = this.getAttribute('data-icon-size');
    let iconOrder = this.getAttribute('data-icon-order');
    let imgSrc = this.getAttribute('data-img');
    let imgAlt = this.getAttribute('data-img-alt');
    let img = (imgAlt != '') ? 'img' : 'not-img';
    let size = this.getAttribute('data-size');
    let label = this.getAttribute('data-label');
    let disableStatus = this.getAttribute('data-disable');
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.id = btnID;
    (disableStatus == 'true') ? btn.disabled = true : btn.disabled = false;
    btn.setAttribute('aria-label', `${ariaLabel || ''}`);
    btn.className = ['cod-button', `cod-button--${size || 'medium'}`, `cod-button--${img}`, `cod-button--${backgroundColor}`, `cod-button--${shape || 'fluid'}`, hoverStatus, mode].join(' ');
    if(icon != ''){
      let iconContainer = document.createElement('span');
      let activeIcon = document.createElement('cod-icon');
      activeIcon.setAttribute('data-icon', icon);
      activeIcon.setAttribute('data-size', iconSize);
      iconContainer.appendChild(activeIcon);
      btn.innerText = label;
      if(iconOrder == 'left'){
        btn.insertBefore(iconContainer, btn.firstChild);
      }else{
        btn.appendChild(iconContainer);
      }
    }else if(imgAlt != ''){
      btn.innerText = label;
      const btnIcon = document.createElement('img');
      btnIcon.src = imgSrc;
      btnIcon.setAttribute('alt', imgAlt);
      btn.appendChild(btnIcon);
    }else{
      btn.innerText = label;
    }
    if(!this.shadowRoot.querySelector('button')){
      // Inserting styles
      const variableStyles = document.createElement('style');
      variableStyles.textContent = varStyles;
      this.shadowRoot.appendChild(variableStyles);
      const btnStyles = document.createElement('style');
      btnStyles.textContent = styles;
      this.shadowRoot.appendChild(btnStyles);
      if(link == undefined || link == 'undefined' || link == ''){
        this.shadowRoot.appendChild(btn);
        let ghostBtn = this.appendChild(document.createElement('button'));
        this.onclick = () => ghostBtn.click();
      }else{
        const btnLink = document.createElement('a');
        btnLink.href = link;
        btnLink.appendChild(btn);
        this.shadowRoot.appendChild(btnLink);
      }
    }
  }
};