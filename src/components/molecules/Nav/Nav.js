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
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line no-unused-vars
    this.shadowRoot.addEventListener('slotchange', (ev) => {
      // See CityOfDetroit/detroitmi#1099
      // eslint-disable-next-line prefer-const
      let tempElements = Array.from(this.children);
      tempElements.forEach((node) => {
        // See CityOfDetroit/detroitmi#1099
        // eslint-disable-next-line prefer-const
        let navItem = document.createElement('li');
        navItem.className = 'nav-item';
        navItem.appendChild(node);
        this.nav.append(navItem);
        // See CityOfDetroit/detroitmi#1099
        // eslint-disable-next-line prefer-const
        let nodeClasses = node.className.split(' ');
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
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line prefer-const
    let vertical = this.getAttribute('data-vertical');
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line prefer-const
    let hAlignment = this.getAttribute('data-horizontal-alignment');
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line prefer-const
    let tabs = this.getAttribute('data-tabs');
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line prefer-const
    let pills = this.getAttribute('data-pills');
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line prefer-const
    let underline = this.getAttribute('data-underline');
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line prefer-const
    let fill = this.getAttribute('data-fill');
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line prefer-const
    let justified = this.getAttribute('data-justified');
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line prefer-const
    let extraClasses = this.getAttribute('data-extra-classes');
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line prefer-const
    let navClasses = ['nav'];
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line eqeqeq
    vertical == 'true' ? navClasses.push('flex-column') : 0;
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line eqeqeq
    tabs == 'true' ? navClasses.push('nav-tabs') : 0;
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line eqeqeq
    pills == 'true' ? navClasses.push('nav-pills') : 0;
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line eqeqeq
    underline == 'true' ? navClasses.push('nav-underline') : 0;
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line eqeqeq
    fill == 'true' ? navClasses.push('nav-fill') : 0;
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line eqeqeq
    justified == 'true' ? navClasses.push('nav-justified') : 0;
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line eqeqeq
    hAlignment != undefined && hAlignment != null
      ? navClasses.push(`justify-content-${hAlignment}`)
      : 0;
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line eqeqeq
    extraClasses != undefined && extraClasses != null
      ? navClasses.push(extraClasses)
      : 0;
    this.nav.className = navClasses.join(' ');
    if (!this.shadowRoot.querySelector('ul')) {
      this.shadowRoot.appendChild(this.nav);
    }
  }
}
