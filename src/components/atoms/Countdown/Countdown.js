import styles from '!!raw-loader!./Countdown.css';
import varStyles from '!!raw-loader!../../../shared/variables.css';
import bootstrapStyles from '!!raw-loader!../../../shared/themed-bootstrap.css';

const template = document.createElement('template');

template.innerHTML = `
<time></time>
`;

export default class Countdown extends HTMLElement {
  static get observedAttributes() {
    return ['ends', 'size', 'text'];
  }
  constructor() {
    // Always call super first in constructor
    super();
    // Create a shadow root
    this.countdownInterval = this.initialiseClock.bind(this);
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(attrName, oldValue, newValue) {
    if (newValue !== oldValue) {
      this[attrName] = newValue;
      if (attrName !== 'ends') {
        this.render();
      }
    }
  }

  render() {
    const { ends } = this;
    const bootStyles = document.createElement('style');
    bootStyles.textContent = bootstrapStyles;
    const variableStyles = document.createElement('style');
    variableStyles.textContent = varStyles;
    const badgeStyles = document.createElement('style');
    badgeStyles.textContent = styles;
    this.shadowRoot.appendChild(bootStyles);
    this.shadowRoot.appendChild(variableStyles);
    this.shadowRoot.appendChild(badgeStyles);

    this.initialiseClock(ends);
  }

  get ends() {
    return this.getAttribute('ends');
  }

  get size() {
    return this.getAttribute('size');
  }

  get text() {
    return this.getAttribute('text');
  }

  set ends(value) {
    this.setAttribute('ends', value);
    this.initialiseClock(value);
  }

  set size(value) {
    this.setAttribute('size', value);
  }

  set text(value) {
    this.setAttribute('text', value);
  }

  // Build a countdown unit
  _createCountdownItem(key, value, size, text) {
    const countdownItem = document.createElement('span');
    countdownItem.className = 'item';
    /* actual time left in days, hours, minutes or seconds */
    const timeLeft = document.createElement('span');
    timeLeft.className = `number ${key} ${size} text-${text}`;
    timeLeft.textContent = value;
    /* days, hours, minutes or seconds */
    const unit = document.createElement('span');
    unit.className = `unit ${size} text-${text}`;
    unit.textContent = key;
    countdownItem.appendChild(timeLeft);
    countdownItem.appendChild(unit);
    return countdownItem;
  }

  // Calcuate days, hours, minutes and seconds until endTime
  _getTimeRemaining(endTime) {
    const total = Date.parse(endTime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    return {
      total,
      days,
      hours,
      minutes,
      seconds,
    };
  }

  // Setup and run the clock in the DOM
  initialiseClock(endDate) {
    const { shadowRoot, _createCountdownItem, _getTimeRemaining, size, text } =
      this;
    const timeRemaining = _getTimeRemaining(endDate);
    const timeUnits = Object.keys(timeRemaining);
    const clock = shadowRoot.querySelector('time');
    let timeInterval;
    clock.innerHTML = '';
    timeUnits.forEach((timeUnit) => {
      if (timeUnit !== 'total') {
        clock.appendChild(
          _createCountdownItem(timeUnit, timeRemaining[timeUnit], size, text),
        );
      }
    });

    function updateClock(ref) {
      const endValue = ref.ends;
      const updatedTimeRemaining = _getTimeRemaining(endValue);

      const daysEl = shadowRoot.querySelector('.days');
      const hoursEl = shadowRoot.querySelector('.hours');
      const minutesEl = shadowRoot.querySelector('.minutes');
      const secondsEl = shadowRoot.querySelector('.seconds');

      daysEl.textContent = updatedTimeRemaining.days;
      hoursEl.textContent = updatedTimeRemaining.hours;
      minutesEl.textContent = updatedTimeRemaining.minutes;
      secondsEl.textContent = updatedTimeRemaining.seconds;

      /* Update the datetime attribute of the time element */
      clock.setAttribute(
        'datetime',
        `P${updatedTimeRemaining.days}DT${updatedTimeRemaining.hours}H${updatedTimeRemaining.minutes}M${updatedTimeRemaining.seconds}S`,
      );

      if (updatedTimeRemaining.total <= 0) {
        clearInterval(timeInterval);
      }
    }

    function doesClockExist(ref) {
      if (shadowRoot.querySelector('.days') === null) {
        window.requestAnimationFrame(doesClockExist);
      } else {
        updateClock(ref);
        timeInterval = setInterval(() => {
          updateClock(ref);
        }, 1000);
      }
    }

    doesClockExist(this);
  }
}
