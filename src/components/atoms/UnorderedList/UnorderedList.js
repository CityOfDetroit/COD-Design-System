import styles from '!!raw-loader!./UnorderedList.css';
import varStyles from '!!raw-loader!../../../shared/variables.css';
import bootstrapStyles from '!!raw-loader!../../../shared/themed-bootstrap.css';

const template = document.createElement('template');
template.innerHTML = `
<ul>
  <slot name="list-item">
  </slot>
</ul>
`;

class UnorderedList extends HTMLElement {
  static observedAttributes = [];

  constructor() {
    // Always call super first in constructor
    super();
    // Create a shadow root
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(template.content.cloneNode(true));

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
    const icon = this.getAttribute('icon');
    // TODO: Move this logic into the slotchange event (to avoid the global queryselector).
    const listItems = document.querySelectorAll('li[slot="list-item"]');
    listItems.forEach((listItem) => {
      if (listItem.querySelector('cod-icon') !== null) {
        return;
      }
      const codIcon = document.createElement('cod-icon');
      codIcon.setAttribute('data-icon', icon);
      codIcon.setAttribute('data-size', 'small');
      listItem.prepend(codIcon);
    });
  }
}

export { UnorderedList as default };