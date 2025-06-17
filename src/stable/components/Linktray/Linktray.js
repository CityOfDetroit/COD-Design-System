const template = document.createElement('template');
template.innerHTML = `
<style>
.linktray-container {
  background: #f2f2f2; 
  border-left: 5px solid #feb70d; 
  padding: 20px 10px; 
  width: 100%;

  ul {
    list-style-type: none;
    display: grid;
    gap: 1rem;
    margin: 1rem -2rem;
      @media (min-width: 600px) {
        grid-template-columns: repeat(2, 1fr);
      }
      @media (min-width: 900px) {
        grid-template-columns: repeat(3, 1fr);
      }
  }

       #tray-links ::slotted(li) {
          font-size: 18px;
          font-weight: 600;
        }      
}
</style>
<div class='linktray-container'>
  <span class='tray-title'>
          <slot name="tray-title"></slot>
  </span>
    <ul id="tray-links">
      <slot name="tray-link"></slot>
      </span>
    </ul>

`;

class Linktray extends HTMLElement {
  constructor() {
    super();

    // Create a shadow root
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this._fetchLinks();
  }

  _fetchLinks() {
    const slot = this.shadowRoot.querySelector('slot[name="tray-link"]');
    if (!slot) return;
    
    const wrapLinks = () => {
      const assignedElements = slot.assignedElements();

      assignedElements.forEach((element) => {
        if (element.tagName === 'A') {
          const li = document.createElement('li');
          li.setAttribute('slot', 'tray-link');
          element.removeAttribute('slot'); 
          element.parentNode.insertBefore(li, element);
          
          const chevron = document.createElement('span');
          chevron.classList.add('chevron');
          chevron.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
            </svg> `;
          element.appendChild(chevron);
          li.appendChild(element);
      } else if (element.tagName === 'LI') {
          if (element.querySelector('a')) {
            element.setAttribute('slot', 'tray-link');
          } else {
            element.remove();
          }
          } else {
          element.remove();
          }
      });
    };

    wrapLinks();
    slot.addEventListener('slotchange', wrapLinks);
  }
}

export { Linktray as default };
