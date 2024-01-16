export default observedAttributeMixin = {
  /**
   * Handle an observed attribute change that controls a class on an
   * HTML element:
   *  codElement.handleObservedClassAttribute(
   *    newValue, // undefined or 'table-stacked'
   *    this.tableHeader, // the HTMLElement where the class is applied
   *    'table-stacked' // the name of the class to add
   *  )
   */
  handleObservedClassAttribute(newValue, htmlElement, className) {
    if (newValue) {
      htmlElement.classList.add(className);
    } else {
      htmlElement.classList.remove(className);
    }
  },
};
