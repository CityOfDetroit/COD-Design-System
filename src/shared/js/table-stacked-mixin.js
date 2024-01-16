const tableStackedMixin = {
  /**
   * Handle attribute propagation for a stacked table.
   *  codElement.handleTableStacked(
   *    this, // the custom element.
   *    node, // some other element lower in the DOM tree.
   *  )
   */
  handleTableStacked(currentHtmlElement, targetHtmlElement) {
    if (currentHtmlElement.getAttribute('data-stacked') !== null) {
      targetHtmlElement.setAttribute('data-stacked', '');
      currentHtmlElement.getAttribute('data-label-block') !== null
        ? targetHtmlElement.setAttribute('data-label-block', '')
        : 0;
    }
  },
};

export { tableStackedMixin as default };
