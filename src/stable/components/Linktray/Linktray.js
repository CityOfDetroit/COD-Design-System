
const template = document.createElement('template');
template.innerHTML = `
<style>
.linktray-container {background: #f2f2f2; border-left: 5px solid #feb70d; padding: 20px 10px; }

ul {
  list-style-type: none;
  display: grid;
  margin: 0 auto;
  gap: 1rem;
    @media (min-width: 600px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 900px) {
      grid-template-columns: repeat(3, 1fr);
    }

</style>
<div class='linktray-container'>
  <span class='tray-title'>
          <slot name="tray-title"></slot>
  </span>
    <ul>
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
    this._fetchTitle();
    this._fetchLinks();
  }

  _fetchTitle() {
    const titleSlot = this.shadowRoot.querySelector('slot[name="title"]');
    const titleSpan = document.createElement('span');
    titleSpan.slot = 'title';
    titleSpan.textContent = 'Related Departments';
    titleSpan.classList.add('title');
    // titleSlot.appendChild(titleSpan);
  }

  _fetchLinks() {
    const linkSlot = this.shadowRoot.querySelector('slot[name="tray-link"]');
    
    linkSlot.addEventListener('slotchange', () => {
      const elements = linkSlot.assignedElements();

      elements.forEach((element) => {

          const li = document.createElement('li');
          li.setAttribute('slot', 'tray-link');
          
          const link = element.outerHTML;
          
          li.textContent = link;
          
          const chevron = document.createElement('span');
          chevron.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
</svg> `;
      })
    });
  }

}

export { Linktray as default };
