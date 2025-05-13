import styles from '!!raw-loader!./News.css';

const template = document.createElement('template');
template.innerHTML = `
<style>
${styles}
</style>

<div class="news-card">

<div class="news-header">
<h3 class="news-title">
  <slot name="news-title" id="newsTitleSlot">Default news title</slot>
</h3>
<span class="chevron"></span>
</div>

<div class="news-meta">
   <span id="news-date"></span>
      <div class="news-tags">
        <slot name="tags" id="tagsSlot"></slot>
      </div>
</div>

</div>
`;

class News extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(template.content.cloneNode(true));
  }

  static get observedAttributes(){
    return['datetime'];
  }

  attributeChangedCallback(name, oldValue, newValue){
    if(name === 'date'){
      this.formatDate(newValue);
    }
  }

  connectedCallback(){
  const date = this.getAttribute('date');
  this.formatDate(date);
  }


  formatDate() {

  }
}

export { News as default };