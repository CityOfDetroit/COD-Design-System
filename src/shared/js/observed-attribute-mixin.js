const observedAttributeMixin = {
  /**
   * Handle an observed attribute change that controls a class on an
   * HTML element:
   *  codElement.handleObservedClassAttribute(
   *    name, // the name of the attribute that changed
   *    newValue, // undefined or 'table-stacked'
   *    this.tableHeader, // the HTMLElement where the class is applied
   *    'table-stacked', // the name of the class to add
   *    () => this.querySelectorAll('cod-table-row'), // a function that gets all
   *                                                  // the DOM Nodes to propagate
   *                                                  // the attribute change to
   *  )
   */
  handleObservedClassAttribute(
    name,
    newValue,
    htmlElement,
    className,
    getChildElements = () => [],
  ) {
    if (newValue !== null) {
      htmlElement.classList.add(className);
    } else {
      htmlElement.classList.remove(className);
    }
    getChildElements().forEach((element) => {
      newValue !== null
        ? element.setAttribute(name, '')
        : element.removeAttribute(name);
    });
  },
};

export { observedAttributeMixin as default };
