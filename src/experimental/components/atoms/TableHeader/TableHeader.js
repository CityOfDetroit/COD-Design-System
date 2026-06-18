import styles from '!!raw-loader!./TableHeader.css';
import varStyles from '!!raw-loader!../../../../shared/variables.css';
import bootstrapStyles from '!!raw-loader!../../../../shared/themed-bootstrap.css';

import {
  cellHeaderBlockClass,
  stackedTableClass,
  handleTableStacked,
} from '../../../../shared/js/utilities';
import observedAttributeMixin from '../../../../shared/js/observed-attribute-mixin';

const template = document.createElement('template');

template.innerHTML = `
<slot></slot>
`;

function shouldSetBooleanAttribute(value) {
  return value === 'true';
}

function setOrRemoveAttribute(element, attributeName, shouldSet) {
  if (!element) {
    return;
  }

  if (shouldSet) {
    element.setAttribute(attributeName, 'true');
  } else {
    element.removeAttribute(attributeName);
  }
}

class TableHeader extends HTMLElement {
  static observedClassAttributes = {
    'data-stacked': stackedTableClass,
    'data-label-block': cellHeaderBlockClass,
  };
  static observedAttributeCbs = {
    'data-striped-col': (component, oldValue, newValue) => {
      const shouldSet = shouldSetBooleanAttribute(newValue);
      const rows = component.shadowRoot.querySelectorAll('cod-table-row');

      rows.forEach((row) => {
        setOrRemoveAttribute(row, 'data-striped-col', shouldSet);
      });
    },
    'data-vertical-align': (component, oldValue, newValue) => {
      const shouldSet = shouldSetBooleanAttribute(newValue);
      const rows = component.shadowRoot.querySelectorAll('cod-table-row');

      rows.forEach((row) => {
        setOrRemoveAttribute(row, 'data-vertical-align', shouldSet);
      });
    },
    'data-scrollable': (component, oldValue, newValue) => {
      const shouldSet = shouldSetBooleanAttribute(newValue);
      const rows = component.shadowRoot.querySelectorAll('cod-table-row');

      rows.forEach((row) => {
        setOrRemoveAttribute(row, 'data-scrollable', shouldSet);
      });
    },
  };
  static observedAttributes = [
    ...Object.keys(this.observedClassAttributes),
    ...Object.keys(this.observedAttributeCbs),
  ];

  constructor() {
    // Always call super first in constructor
    super();
    // Create a shadow root
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(template.content.cloneNode(true));
    this.tableHeader = document.createElement('thead');

    shadow.addEventListener('slotchange', () => {
      const tempElements = Array.from(this.children);
      tempElements.forEach((node, index) => {
        if (index === 0) {
          node.setIsFirst();
        }

        // TODO: Fix old ESLint errors - see issue #1099
        // eslint-disable-next-line eqeqeq
        this.getAttribute('data-striped-col') == 'true'
          ? node.setAttribute('data-striped-col', 'true')
          : 0;

        // TODO: Fix old ESLint errors - see issue #1099
        // eslint-disable-next-line eqeqeq
        this.getAttribute('data-vertical-align') == 'true'
          ? node.setAttribute('data-vertical-align', 'true')
          : 0;
        this.getAttribute('data-scrollable') === 'true'
          ? node.setAttribute('data-scrollable', 'true')
          : 0;
        handleTableStacked(this, node);

        this.tableHeader.append(node);
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

    shadow.appendChild(this.tableHeader);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name in TableHeader.observedClassAttributes) {
      this.handleObservedClassAttribute(
        name,
        newValue,
        this.tableHeader,
        TableHeader.observedClassAttributes[name],
        () => {
          return this.shadowRoot.querySelectorAll('cod-table-row');
        },
      );
    }

    if (name in TableHeader.observedAttributeCbs) {
      this.handleObservedAttribute(
        oldValue,
        newValue,
        TableHeader.observedAttributeCbs[name],
      );
    }
  }
}

// Apply mixins.
Object.assign(TableHeader.prototype, observedAttributeMixin);

export { TableHeader as default };
