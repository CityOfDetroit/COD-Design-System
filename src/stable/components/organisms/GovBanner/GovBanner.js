import styles from '!!raw-loader!./GovBanner.css';
import varStyles from '!!raw-loader!../../../../shared/vairbale.css';
import bootstrapStyles from '!!raw-loader!../../../../shared/themed-bootstrapStyles.css';


const template = document.createElement('template');
      
template.innerHTML = `
  <div part="container" class="banner-container">
    <header part="header" class="banner-header">
      <div part="title-section" class="title-section">
        <slot name="city-name">CITY OF DETROIT</slot>
        <div part="official-text" class="official-text">
          <slot name="official-statement">An official website of the City of Detroit.</slot>
          <span part="know-text" class="know-text">
            <slot name="know-statement">Here's how you know.</slot>
          </span>
        </div>
      </div>
      <button part="toggle" class="chevron-container" aria-expanded="false" aria-controls="content">
        <slot name="toggle-icon">▼</slot>
      </button>
    </header>
    <div id="content" part="content" class="content-container" hidden>
      <slot name="content"></slot>
    </div>
  </div>
`;