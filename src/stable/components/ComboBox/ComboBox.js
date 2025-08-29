import styles from '!!raw-loader!./ComboBox.css';

const template = document.createElement('template');
template.innerHTML = `
<div class="combo-box" part="container">
  <label class="combo-box-label" part="label">
    <slot name="label"></slot>
  </label>
  <div class="combo-box-wrapper" part="wrapper">
    <input
      class="combo-box-input"
      type="text"
      role="combobox"
      aria-expanded="false"
      aria-haspopup="listbox"
      aria-autocomplete="list"
      autocomplete="off"
      part="input"
    />
    <button
      class="combo-box-clear-button"
      type="button"
      aria-label="Clear selection"
      part="clear"
    >
      <svg class="combo-box-clear-icon" viewBox="0 0 16 16" aria-hidden="true">
        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
      </svg>
    </button>
    <button
      class="combo-box-toggle-button"
      type="button"
      tabindex="-1"
      aria-label="Toggle options"
      part="toggle"
    >
      <svg class="combo-box-toggle-icon" viewBox="0 0 16 16" aria-hidden="true">
        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
      </svg>
    </button>
  </div>
  <ul
    class="combo-box-list"
    role="listbox"
    aria-hidden="true"
    part="listbox"
  ></ul>
  <div class="combo-box-status" aria-live="polite" aria-atomic="true" part="status"></div>
</div>
`;

export default class ComboBox extends HTMLElement {
  static get observedAttributes() {
    return [
      'placeholder',
      'default',
      'filter',
      'required',
      'disabled',
      'name',
      'id',
    ];
  }

  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(template.content.cloneNode(true));

    // Add styles
    const itemStyles = document.createElement('style');
    itemStyles.textContent = styles;
    shadow.appendChild(itemStyles);

    // Initialize state
    this._state = {
      isOpen: false,
      options: [],
      filteredOptions: [],
      selectedIndex: -1,
      activeIndex: -1,
      inputValue: '',
      selectedValue: '',
      placeholder: '',
      defaultValue: '',
      customFilter: null,
      required: false,
      disabled: false,
      name: '',
      id: '',
    };

    // Bind methods
    this._handleInputChange = this._handleInputChange.bind(this);
    this._handleInputKeyDown = this._handleInputKeyDown.bind(this);
    this._handleInputFocus = this._handleInputFocus.bind(this);
    this._handleInputBlur = this._handleInputBlur.bind(this);
    this._handleToggleClick = this._handleToggleClick.bind(this);
    this._handleClearClick = this._handleClearClick.bind(this);
    this._handleOptionClick = this._handleOptionClick.bind(this);
    this._handleDocumentClick = this._handleDocumentClick.bind(this);
  }

  connectedCallback() {
    // Parse options from child elements
    this._parseOptions();

    // Create hidden input for form participation
    this._createHiddenInput();

    // Set up event listeners
    this._setupEventListeners();

    // Initialize attributes
    this._initializeAttributes();

    // Initial render
    this._render();
  }

  disconnectedCallback() {
    this._removeEventListeners();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue === newValue) return;

    switch (name) {
      case 'placeholder':
        this._state.placeholder = newValue || '';
        break;
      case 'default':
        this._state.defaultValue = newValue || '';
        this._state.selectedValue = newValue || '';
        this._state.inputValue = newValue || '';
        break;
      case 'filter':
        this._state.customFilter = newValue;
        break;
      case 'required':
        this._state.required = newValue !== null;
        break;
      case 'disabled':
        this._state.disabled = newValue !== null;
        break;
      case 'name':
        this._state.name = newValue || '';
        if (this._hiddenInput) {
          this._hiddenInput.name = newValue || '';
        }
        break;
      case 'id':
        this._state.id = newValue || '';
        break;
    }

    this._render();
  }

  _parseOptions() {
    const options = [];
    const optionElements = this.querySelectorAll('option');

    optionElements.forEach((option) => {
      options.push({
        value: option.value,
        text: option.textContent.trim(),
        selected: option.hasAttribute('selected'),
      });
    });

    this._state.options = options;
    this._state.filteredOptions = [...options];

    // Set selected value from options
    const selectedOption = options.find((opt) => opt.selected);
    if (selectedOption) {
      this._state.selectedValue = selectedOption.value;
      this._state.inputValue = selectedOption.text;
      // Update hidden input if it exists (it might not exist yet during initialization)
      if (this._hiddenInput) {
        this._updateHiddenInput();
      }
    }
  }

  _createHiddenInput() {
    // Remove existing hidden input if it exists
    if (this._hiddenInput) {
      this._hiddenInput.remove();
    }

    // Create hidden input for form participation
    this._hiddenInput = document.createElement('input');
    this._hiddenInput.type = 'hidden';
    this._hiddenInput.value = this._state.selectedValue || '';

    // Set name and other attributes
    if (this._state.name) {
      this._hiddenInput.name = this._state.name;
    }

    // Append to the component (light DOM)
    this.appendChild(this._hiddenInput);
  }

  _setupEventListeners() {
    const input = this.shadowRoot.querySelector('.combo-box-input');
    const toggleButton = this.shadowRoot.querySelector(
      '.combo-box-toggle-button',
    );
    const clearButton = this.shadowRoot.querySelector(
      '.combo-box-clear-button',
    );

    input.addEventListener('input', this._handleInputChange);
    input.addEventListener('keydown', this._handleInputKeyDown);
    input.addEventListener('focus', this._handleInputFocus);
    input.addEventListener('blur', this._handleInputBlur);
    toggleButton.addEventListener('click', this._handleToggleClick);
    clearButton.addEventListener('click', this._handleClearClick);

    document.addEventListener('click', this._handleDocumentClick);
  }

  _removeEventListeners() {
    const input = this.shadowRoot.querySelector('.combo-box-input');
    const toggleButton = this.shadowRoot.querySelector(
      '.combo-box-toggle-button',
    );
    const clearButton = this.shadowRoot.querySelector(
      '.combo-box-clear-button',
    );

    if (input) {
      input.removeEventListener('input', this._handleInputChange);
      input.removeEventListener('keydown', this._handleInputKeyDown);
      input.removeEventListener('focus', this._handleInputFocus);
      input.removeEventListener('blur', this._handleInputBlur);
    }

    if (toggleButton) {
      toggleButton.removeEventListener('click', this._handleToggleClick);
    }

    if (clearButton) {
      clearButton.removeEventListener('click', this._handleClearClick);
    }

    document.removeEventListener('click', this._handleDocumentClick);
  }

  _initializeAttributes() {
    this._state.placeholder = this.getAttribute('placeholder') || '';
    this._state.defaultValue = this.getAttribute('default') || '';
    this._state.customFilter = this.getAttribute('filter');
    this._state.required = this.hasAttribute('required');
    this._state.disabled = this.hasAttribute('disabled');
    this._state.name = this.getAttribute('name') || '';
    this._state.id = this.getAttribute('id') || '';

    if (this._state.defaultValue) {
      this._state.selectedValue = this._state.defaultValue;
      this._state.inputValue = this._state.defaultValue;
      this._updateHiddenInput();
    }
  }

  _handleInputChange(event) {
    const value = event.target.value;
    this._state.inputValue = value;
    this._filterOptions(value);
    this._openList();
    this._updateStatus();
  }

  _handleInputKeyDown(event) {
    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        if (!this._state.isOpen) {
          this._openList();
        } else {
          this._navigateOptions(1);
        }
        break;
      case 'ArrowUp':
        event.preventDefault();
        this._navigateOptions(-1);
        break;
      case 'Enter':
        event.preventDefault();
        if (this._state.isOpen && this._state.activeIndex >= 0) {
          this._selectOption(this._state.activeIndex);
        }
        break;
      case 'Escape':
        this._closeList();
        break;
      case 'Tab':
        this._closeList();
        break;
    }
  }

  _handleInputFocus() {
    this._filterOptions(this._state.inputValue);
    this._openList();
  }

  _handleInputBlur(event) {
    // Delay closing to allow for option clicks
    setTimeout(() => {
      if (!this.shadowRoot.contains(document.activeElement)) {
        this._closeList();

        // If user typed a filter but didn't select an option, clear the filter
        const currentInput = this._state.inputValue;
        const hasMatchingOption = this._state.options.some(
          (option) => option.text.toLowerCase() === currentInput.toLowerCase(),
        );

        // If the current input doesn't match any option exactly, revert to selected value
        if (!hasMatchingOption) {
          const selectedOption = this._state.options.find(
            (opt) => opt.value === this._state.selectedValue,
          );
          this._state.inputValue = selectedOption ? selectedOption.text : '';
          this._updateInputValue();
          this._render();
        }
      }
    }, 150);
  }

  _handleToggleClick(event) {
    event.preventDefault();
    if (this._state.isOpen) {
      this._closeList();
    } else {
      this._openList();
    }
  }

  _handleClearClick(event) {
    event.preventDefault();
    this.clear();
    this._dispatchChangeEvent();
  }

  _handleOptionClick(event) {
    const index = parseInt(event.currentTarget.dataset.index, 10);
    this._selectOption(index);
  }

  _handleDocumentClick(event) {
    if (
      !this.contains(event.target) &&
      !this.shadowRoot.contains(event.target)
    ) {
      this._closeList();
    }
  }

  _filterOptions(query) {
    if (
      this._state.customFilter &&
      typeof window[this._state.customFilter] === 'function'
    ) {
      this._state.filteredOptions = window[this._state.customFilter](
        this._state.options,
        query,
      );
    } else {
      this._state.filteredOptions = this._state.options.filter((option) =>
        option.text.toLowerCase().includes(query.toLowerCase()),
      );
    }
    this._state.activeIndex = this._state.filteredOptions.length > 0 ? 0 : -1;
    this._renderOptions();
  }

  _navigateOptions(direction) {
    const maxIndex = this._state.filteredOptions.length - 1;
    let newIndex = this._state.activeIndex + direction;

    if (newIndex < 0) {
      newIndex = maxIndex;
    } else if (newIndex > maxIndex) {
      newIndex = 0;
    }

    this._state.activeIndex = newIndex;
    this._renderOptions();
    this._scrollToActiveOption();
  }

  _selectOption(index) {
    const option = this._state.filteredOptions[index];
    if (option) {
      this._state.selectedValue = option.value;
      this._state.inputValue = option.text;
      this._state.selectedIndex = this._state.options.findIndex(
        (opt) => opt.value === option.value,
      );
      this._closeList();
      this._updateInputValue();
      this._updateHiddenInput();
      this._render(); // Re-render to show/hide clear button
      this._dispatchChangeEvent();
    }
  }

  _openList() {
    this._state.isOpen = true;
    this._updateAriaAttributes();
    this._renderOptions();
  }

  _closeList() {
    this._state.isOpen = false;
    this._state.activeIndex = -1;
    this._updateAriaAttributes();
    this._renderOptions();
  }

  _scrollToActiveOption() {
    const listbox = this.shadowRoot.querySelector('.combo-box-list');
    const activeOption = listbox.querySelector('[aria-selected="true"]');

    if (activeOption) {
      activeOption.scrollIntoView({ block: 'nearest' });
    }
  }

  _updateInputValue() {
    const input = this.shadowRoot.querySelector('.combo-box-input');
    input.value = this._state.inputValue;
  }

  _updateHiddenInput() {
    if (this._hiddenInput) {
      this._hiddenInput.value = this._state.selectedValue;
    }
  }

  _updateAriaAttributes() {
    const input = this.shadowRoot.querySelector('.combo-box-input');
    const listbox = this.shadowRoot.querySelector('.combo-box-list');

    input.setAttribute('aria-expanded', this._state.isOpen.toString());
    listbox.setAttribute('aria-hidden', (!this._state.isOpen).toString());
  }

  _updateStatus() {
    const status = this.shadowRoot.querySelector('.combo-box-status');
    const count = this._state.filteredOptions.length;

    if (this._state.isOpen) {
      status.textContent = `${count} option${
        count !== 1 ? 's' : ''
      } available.`;
    } else {
      status.textContent = '';
    }
  }

  _renderOptions() {
    const listbox = this.shadowRoot.querySelector('.combo-box-list');

    if (!this._state.isOpen) {
      listbox.style.display = 'none';
      return;
    }

    listbox.style.display = 'block';
    listbox.innerHTML = '';

    this._state.filteredOptions.forEach((option, index) => {
      const li = document.createElement('li');
      li.className = 'combo-box-option';
      li.setAttribute('role', 'option');
      li.setAttribute('data-index', index.toString());
      li.setAttribute(
        'aria-selected',
        (index === this._state.activeIndex).toString(),
      );
      li.textContent = option.text;

      if (index === this._state.activeIndex) {
        li.classList.add('combo-box-option--active');
      }

      li.addEventListener('click', this._handleOptionClick);
      listbox.appendChild(li);
    });

    if (this._state.filteredOptions.length === 0) {
      const li = document.createElement('li');
      li.className = 'combo-box-option combo-box-option--no-results';
      li.textContent = 'No results found';
      listbox.appendChild(li);
    }
  }

  _render() {
    const input = this.shadowRoot.querySelector('.combo-box-input');
    const toggleButton = this.shadowRoot.querySelector(
      '.combo-box-toggle-button',
    );
    const clearButton = this.shadowRoot.querySelector(
      '.combo-box-clear-button',
    );

    // Check if there's a selection to show clear button
    const hasSelection = this._state.selectedValue && this._state.inputValue;

    // Update input attributes
    input.placeholder = this._state.placeholder;
    input.required = this._state.required;
    input.disabled = this._state.disabled;
    input.value = this._state.inputValue;

    // Clear button visibility and input padding are handled by CSS classes

    if (this._state.name) {
      input.name = this._state.name;
    }

    if (this._state.id) {
      input.id = this._state.id;
      input.setAttribute('aria-describedby', `${this._state.id}-status`);
      this.shadowRoot.querySelector(
        '.combo-box-status',
      ).id = `${this._state.id}-status`;
    }

    // Update button states
    toggleButton.disabled = this._state.disabled;
    clearButton.disabled = this._state.disabled;

    // Update container classes
    const container = this.shadowRoot.querySelector('.combo-box');
    container.classList.toggle('combo-box--disabled', this._state.disabled);
    container.classList.toggle('combo-box--open', this._state.isOpen);
    container.classList.toggle(
      'combo-box--has-selection',
      hasSelection && !this._state.disabled,
    );

    this._updateAriaAttributes();
    this._renderOptions();
  }

  _dispatchChangeEvent() {
    const event = new CustomEvent('change', {
      detail: {
        value: this._state.selectedValue,
        text: this._state.inputValue,
      },
      bubbles: true,
    });
    this.dispatchEvent(event);
  }

  // Public API
  get value() {
    return this._state.selectedValue;
  }

  set value(val) {
    const option = this._state.options.find((opt) => opt.value === val);
    if (option) {
      this._state.selectedValue = val;
      this._state.inputValue = option.text;
      this._updateInputValue();
      this._updateHiddenInput();
    }
  }

  get disabled() {
    return this._state.disabled;
  }

  set disabled(val) {
    if (val) {
      this.setAttribute('disabled', '');
    } else {
      this.removeAttribute('disabled');
    }
  }

  clear() {
    this._state.selectedValue = '';
    this._state.inputValue = '';
    this._updateInputValue();
    this._updateHiddenInput();
    this._closeList();
    this._render(); // Re-render to hide clear button
  }

  focus() {
    const input = this.shadowRoot.querySelector('.combo-box-input');
    input.focus();
  }
}
