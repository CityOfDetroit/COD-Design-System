const template = document.createElement('template');

template.innerHTML = `
<slot></slot>
`;

const KEYCODE = {
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39,
  SPACE: 32,
  UP: 38,
  HOME: 36,
  END: 35,
};

export default class FormCheckGroup extends HTMLElement {

  constructor() {
    // Always call super first in constructor
    super();
    // Create a shadow root
    // Create a shadow root
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    // setting up styles
    if (!this.hasAttribute('role')) {
      if(this.getAttribute('data-type') == 'radio'){
        this.setAttribute('role', 'radiogroup');
      }else{
        this.setAttribute('role', 'group');
      }
    }
    let firstCheckedButton = this.checkedRadioButton;
    if (firstCheckedButton) {
      this._uncheckAll();
      this._checkNode(firstCheckedButton);
    } else {
      this.querySelector('cod-form-check').setAttribute('tabindex', 0);
    }

    this.addEventListener('keydown', this._onKeyDown);
    this.addEventListener('click', this._onClick);
  }

  disconnectedCallback() {
    this.removeEventListener('keydown', this._onKeyDown);
    this.removeEventListener('click', this._onClick);
  }

  _onKeyDown(e) {
    switch (e.keyCode) {
      case KEYCODE.UP:
      case KEYCODE.LEFT:
        e.preventDefault();
        this._setCheckedToPrevButton();
        break;

      case KEYCODE.DOWN:
      case KEYCODE.RIGHT:
        e.preventDefault();
        this._setCheckedToNextButton();
        break;

      case KEYCODE.HOME:
        e.preventDefault();
        this._setChecked(this.firstRadioButton);
        break;

      case KEYCODE.END:
        e.preventDefault();
        this._setChecked(this.lastRadioButton);
        break;

      case KEYCODE.SPACE:
        e.preventDefault();
        if (e.target.tagName.toLowerCase() === 'cod-form-check') {
          this._setChecked(e.target);
        }
        break;

      default:
        break;
    }
  }

  get checkedRadioButton() {
    return this.querySelector('[data-checked="true"]');
  }

  get firstRadioButton() {
    return this.querySelector('cod-form-check:first-of-type');
  }

  get lastRadioButton() {
    return this.querySelector('cod-form-check:last-of-type');
  }

  _prevRadioButton(node) {
    let prev = node.previousElementSibling;
    while (prev) {
      if (prev.getAttribute('data-type') === 'radio') {
        return prev;
      }
      prev = prev.previousElementSibling;
    }
    return null;
  }

  _nextRadioButton(node) {
    let next = node.nextElementSibling;
    while (next) {
      if (next.getAttribute('data-type') === 'radio') {
        return next;
      }
      next = next.nextElementSibling;
    }
    return null;
  }

  _setCheckedToPrevButton() {
    let checkedButton = this.checkedRadioButton || this.firstRadioButton;
    if (checkedButton === this.firstRadioButton) {
      this._setChecked(this.lastRadioButton);
    } else {
      this._setChecked(this._prevRadioButton(checkedButton));
    }
  }

  _setCheckedToNextButton() {
    let checkedButton = this.checkedRadioButton || this.firstRadioButton;
    if (checkedButton === this.lastRadioButton) {
      this._setChecked(this.firstRadioButton);
    } else {
      this._setChecked(this._nextRadioButton(checkedButton));
    }
  }

  _setChecked(node) {
    this._uncheckAll();
    this._checkNode(node);
    this._focusNode(node);
  }

  _uncheckAll() {
    const radioButtons = this.querySelectorAll('cod-form-check');
    for (let i = 0; i < radioButtons.length; i++) {
      let btn = radioButtons[i];
      btn.setAttribute('data-checked', 'false');
      btn.setAttribute('data-required', 'false');
      btn.tabIndex = -1;
    }
  }

  _checkNode(node) {
    node.setAttribute('data-checked', 'true');
    node.setAttribute('data-required', 'true');
    node.tabIndex = 0;
  }

  _focusNode(node) {
    node.focus();
  }

  _onClick(e) {
    if (e.target.getAttribute('data-type') === 'radio') {
      this._setChecked(e.target);
    }
  }
};