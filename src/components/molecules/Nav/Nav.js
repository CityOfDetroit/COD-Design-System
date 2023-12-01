import styles from '!!raw-loader!./Nav.css';
import varStyles from '!!raw-loader!../../../shared/variables.css';
import bootstrapStyles from '!!raw-loader!../../../shared/themed-bootstrap.css';

const template = document.createElement('template');

template.innerHTML = `
<slot></slot>
`;

export default class Nav extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();
    // Create a shadow root
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(template.content.cloneNode(true));
    this.nav = document.createElement('ul');
    this.shadowRoot.addEventListener('slotchange', () => {
      const tempElements = Array.from(this.children);
      tempElements.forEach((node) => {
        const navItem = document.createElement('li');
        navItem.className = 'nav-item';
        navItem.appendChild(node);
        this.nav.append(navItem);
        const nodeClasses = node.className.split(' ');
        nodeClasses.includes('no-wc')
          ? node.remove()
          : this.nav.append(navItem);
      });
    });

    // Add styles
    const bootStyles = document.createElement('style');
    bootStyles.textContent = bootstrapStyles;
    const variableStyles = document.createElement('style');
    variableStyles.textContent = varStyles;
    const itemStyles = document.createElement('style');
    itemStyles.textContent = styles;
    shadow.appendChild(bootStyles);
    shadow.appendChild(variableStyles);
    shadow.appendChild(itemStyles);
  }

  connectedCallback() {
    // Nav attributes
    const vertical = this.getAttribute('data-vertical');
    const hAlignment = this.getAttribute('data-horizontal-alignment');
    const tabs = this.getAttribute('data-tabs');
    const pills = this.getAttribute('data-pills');
    const underline = this.getAttribute('data-underline');
    const fill = this.getAttribute('data-fill');
    const justified = this.getAttribute('data-justified');
    const extraClasses = this.getAttribute('data-extra-classes');
    const navClasses = ['nav'];
    vertical === 'true' ? navClasses.push('flex-column') : 0;
    tabs === 'true' ? navClasses.push('nav-tabs') : 0;
    pills === 'true' ? navClasses.push('nav-pills') : 0;
    underline === 'true' ? navClasses.push('nav-underline') : 0;
    fill === 'true' ? navClasses.push('nav-fill') : 0;
    justified === 'true' ? navClasses.push('nav-justified') : 0;
    hAlignment ? navClasses.push(`justify-content-${hAlignment}`) : 0;
    extraClasses ? navClasses.push(extraClasses) : 0;
    this.nav.className = navClasses.join(' ');
    if (!this.shadowRoot.querySelector('ul')) {
      this.shadowRoot.appendChild(this.nav);
    }
  }
}
