export default class Badge extends HTMLElement {
    constructor() {
      // Always call super first in constructor
      super();
      // Create a shadow root
      const shadow = this.attachShadow({ mode: 'open' });
    }
  
    connectedCallback() {
      const badgeStyles = document.createElement('style');
      badgeStyles.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;700&display=swap');
          
      .cod-badge {
        font-family: 'Montserrat', sans-serif;
        font-weight: 700;
        padding: .35em .75em;
        font-size: .75em;
        display: inline-block;
        line-height: 1;
        text-align: center;
        white-space: nowrap;
      }
      .cod-badge--color-1 {
        color: #fff;
        background-color: #004445;
      }
      .cod-badge--color-2 {
        color: #004445;
        background-color: #9FD5B3;
      }
      .cod-badge--color-3 {
        color: #000;
        background-color: #feb70d;
      }
      .cod-badge--color-4 {
        color: #fff;
        background-color: #b3393b;
      }
      .cod-badge--color-5 {
        color: #000;
        background-color: #e6e6e6;
      }
      .cod-badge--color-light {
        color: #000;
        background-color: #fff;
      }
      .cod-badge--color-dark {
        color: #fff;
        background-color: #000;
      }
      `;
       // badge attributes
       let tag = this.getAttribute('data-tag');
       let backgroundColor = this.getAttribute('data-background-color');
       let content = this.getAttribute('data-content');
       let url = this.getAttribute('data-url');
      this.shadowRoot.appendChild(badgeStyles);
      let badge = null;
      if(url != ''){
        badge = document.createElement('a');
        badge.href = url;
      }else{
        badge = document.createElement(tag);
      }
      badge.innerText = content;
      badge.className = ['cod-badge', `cod-badge--${backgroundColor}`].join(' ');
      console.log(badge);
      this.shadowRoot.appendChild(badge);
    }
  };