import styles from '!!raw-loader!./TableBody.css';
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

class TableBody extends HTMLElement {
  static observedClassAttributes = {
    'data-stacked': stackedTableClass,
    'data-label-block': cellHeaderBlockClass,
  };
  static observedAttributeCbs = {
    'data-hover': (component, oldValue, newValue) => {
      const shouldSet = shouldSetBooleanAttribute(newValue);
      const rows = component.shadowRoot.querySelectorAll('cod-table-row');

      rows.forEach((row) => {
        setOrRemoveAttribute(row, 'data-hover', shouldSet);
      });
    },
    'data-striped-row': (component, oldValue, newValue) => {
      const shouldSet = shouldSetBooleanAttribute(newValue);
      const rows = component.shadowRoot.querySelectorAll('cod-table-row');

      rows.forEach((row, index) => {
        setOrRemoveAttribute(
          row,
          'data-striped-row',
          shouldSet && index % 2 === 0,
        );
      });
    },
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
    this.tableBody = document.createElement('tbody');

    shadow.addEventListener('slotchange', () => {
      const tempElements = Array.from(this.children);
      tempElements.forEach((node, index) => {
        if (index === 0) {
          node.setIsFirst();
        } else if (index % 2 !== 0) {
          node.setIsOdd();
        }

        // TODO: Fix old ESLint errors - see issue #1099
        // eslint-disable-next-line eqeqeq
        this.getAttribute('data-striped-row') == 'true' && index % 2 == 0
          ? node.setAttribute('data-striped-row', 'true')
          : 0;

        // TODO: Fix old ESLint errors - see issue #1099
        // eslint-disable-next-line eqeqeq
        this.getAttribute('data-hover') == 'true'
          ? node.setAttribute('data-hover', 'true')
          : 0;

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

        this.tableBody.append(node);
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

    shadow.appendChild(this.tableBody);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name in TableBody.observedClassAttributes) {
      this.handleObservedClassAttribute(
        name,
        newValue,
        this.tableBody,
        TableBody.observedClassAttributes[name],
        () => {
          return this.shadowRoot.querySelectorAll('cod-table-row');
        },
      );
    }

    if (name in TableBody.observedAttributeCbs) {
      this.handleObservedAttribute(
        oldValue,
        newValue,
        TableBody.observedAttributeCbs[name],
      );
    }
  }
}

// Apply mixins.
Object.assign(TableBody.prototype, observedAttributeMixin);

export { TableBody as default };
