import styles from '!!raw-loader!./TableRow.css';
import varStyles from '!!raw-loader!../../../../shared/variables.css';
import bootstrapStyles from '!!raw-loader!../../../../shared/themed-bootstrap.css';
import {
  cellHeaderBlockClass,
  firstClass,
  oddClass,
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

class TableRow extends HTMLElement {
  static observedClassAttributes = {
    'data-stacked': stackedTableClass,
    'data-label-block': cellHeaderBlockClass,
  };
  static observedAttributeCbs = {
    'data-hover': (component, oldValue, newValue) => {
      const shouldSet = shouldSetBooleanAttribute(newValue);
      component.tableRow.classList.toggle('table-hover', shouldSet);
    },
    'data-striped-row': (component, oldValue, newValue) => {
      const shouldSet = shouldSetBooleanAttribute(newValue);
      const cells = component.shadowRoot.querySelectorAll(
        'cod-table-cell, cod-table-cell-header',
      );

      cells.forEach((cell) => {
        setOrRemoveAttribute(cell, 'data-striped-row', shouldSet);
      });
    },
    'data-striped-col': (component, oldValue, newValue) => {
      const shouldSet = shouldSetBooleanAttribute(newValue);
      const cells = component.shadowRoot.querySelectorAll(
        'cod-table-cell, cod-table-cell-header',
      );

      cells.forEach((cell, index) => {
        setOrRemoveAttribute(
          cell,
          'data-striped-col',
          shouldSet && index % 2 !== 0,
        );
      });
    },
    'data-vertical-align': (component, oldValue, newValue) => {
      const shouldSet = shouldSetBooleanAttribute(newValue);
      const cells = component.shadowRoot.querySelectorAll(
        'cod-table-cell, cod-table-cell-header',
      );

      cells.forEach((cell) => {
        setOrRemoveAttribute(cell, 'data-vertical-align', shouldSet);
      });
    },
    'data-scrollable': (component, oldValue, newValue) => {
      const shouldSet = shouldSetBooleanAttribute(newValue);
      const cells = component.shadowRoot.querySelectorAll(
        'cod-table-cell, cod-table-cell-header',
      );

      cells.forEach((cell) => {
        setOrRemoveAttribute(cell, 'data-scrollable', shouldSet);
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
    this.tableRow = document.createElement('tr');

    shadow.addEventListener('slotchange', () => {
      const tempElements = Array.from(this.children);
      tempElements.forEach((node, index) => {
        // TODO: Fix old ESLint errors - see issue #1099
        // eslint-disable-next-line eqeqeq
        this.getAttribute('data-striped-row') == 'true'
          ? node.setAttribute('data-striped-row', 'true')
          : 0;

        // TODO: Fix old ESLint errors - see issue #1099
        // eslint-disable-next-line eqeqeq
        this.getAttribute('data-striped-col') == 'true' && index % 2 != 0
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

        this.tableRow.append(node);
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

    shadow.appendChild(this.tableRow);
  }

  connectedCallback() {
    // TableRow attributes

    const extraClasses = this.getAttribute('data-extra-classes');

    const hover = this.getAttribute('data-hover');

    // TODO: Fix old ESLint errors - see issue #1099
    // eslint-disable-next-line eqeqeq
    hover == 'true' ? this.tableRow.classList.add('table-hover') : 0;

    // TODO: Fix old ESLint errors - see issue #1099
    // eslint-disable-next-line eqeqeq
    extraClasses != undefined && extraClasses != null
      ? this.tableRow.classList.add(extraClasses)
      : 0;
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name in TableRow.observedClassAttributes) {
      this.handleObservedClassAttribute(
        name,
        newValue,
        this.tableRow,
        TableRow.observedClassAttributes[name],
        () => {
          return this.shadowRoot.querySelectorAll('cod-table-cell');
        },
      );
    }

    if (name in TableRow.observedAttributeCbs) {
      this.handleObservedAttribute(
        oldValue,
        newValue,
        TableRow.observedAttributeCbs[name],
      );
    }
  }

  setIsFirst(isFirst = true) {
    if (isFirst) {
      this.tableRow.classList.add(firstClass);
    } else {
      this.tableRow.classList.remove(firstClass);
    }
  }

  setIsOdd(isOdd = true) {
    if (isOdd) {
      this.tableRow.classList.add(oddClass);
    } else {
      this.tableRow.classList.remove(oddClass);
    }
  }
}

// Apply mixins.
Object.assign(TableRow.prototype, observedAttributeMixin);

export { TableRow as default };
