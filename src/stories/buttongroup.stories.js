import { html } from 'lit-html';
import '../components/molecules/ButtonGroup/cod-button-group';
import '../components/atoms/Button/cod-button';

export default {
  title: 'Components/Molecules/ButtonGroup',
};

export const Basic = () => html`
<cod-button-group
  data-type="group"
  data-label="basic example">
  <cod-button data-label="Left" data-background-color="primary" data-primary="true" data-img-alt="" data-icon=""></cod-button>
  <cod-button data-label="Middle" data-background-color="primary" data-primary="true" data-img-alt="" data-icon=""></cod-button>
  <cod-button data-label="Right" data-background-color="primary" data-primary="true" data-img-alt="" data-icon=""></cod-button>
</cod-button-group>
`;

export const Mixed = () => html`
<cod-button-group
  data-type="group"
  data-label="basic example">
  <cod-button data-label="Left" data-background-color="primary" data-primary="true" data-img-alt="" data-icon=""></cod-button>
  <cod-button data-label="Middle" data-background-color="warning" data-primary="true" data-img-alt="" data-icon=""></cod-button>
  <cod-button data-label="Right" data-background-color="danger" data-primary="true" data-img-alt="" data-icon=""></cod-button>
</cod-button-group>
`;

export const Outlined = () => html`
<cod-button-group
  data-type="group"
  data-label="basic example">
  <cod-button data-label="Left" data-background-color="primary" data-primary="false" data-img-alt="" data-icon=""></cod-button>
  <cod-button data-label="Middle" data-background-color="primary" data-primary="false" data-img-alt="" data-icon=""></cod-button>
  <cod-button data-label="Right" data-background-color="primary" data-primary="false" data-img-alt="" data-icon=""></cod-button>
</cod-button-group>
`;

export const CheckboxButtonGroup = () => html`
<cod-button-group
  data-type="group"
  data-label="basic example">
  <cod-form-check data-id="check-button-1" data-name="check-button" data-value="check-button" data-type="checkbox" data-btn-color="danger" data-checked="false" data-label="Check Button 1" data-mode="btn-outline" data-disabled="false" data-required="false" data-invalid="false" data-extra-classes="ps-0"></cod-form-check>
  <cod-form-check data-id="check-button-2" data-name="check-button" data-value="check-button" data-type="checkbox" data-btn-color="danger" data-checked="false" data-label="Check Button 2" data-mode="btn-outline" data-disabled="false" data-required="false" data-invalid="false" data-extra-classes="ps-0"></cod-form-check>
  <cod-form-check data-id="check-button-3" data-name="check-button" data-value="check-button" data-type="checkbox" data-btn-color="danger" data-checked="false" data-label="Check Button 3" data-mode="btn-outline" data-disabled="false" data-required="false" data-invalid="false" data-extra-classes="ps-0"></cod-form-check>
</cod-button-group>
<br><br>
<cod-button-group
  data-type="group"
  data-label="basic example">
  <cod-form-check-group
  data-type="radio"
  class="d-flex">
    <cod-form-check data-id="radio-button-1" data-name="radio-button" data-value="radio-button-1" data-type="radio" data-btn-color="primary" data-checked="false" data-label="Radio 1" data-mode="btn-outline" data-disabled="false" data-required="false" data-invalid="false" data-extra-classes="ps-0"></cod-form-check>
    <cod-form-check data-id="radio-button-2" data-name="radio-button" data-value="radio-button-2" data-type="radio" data-btn-color="primary" data-checked="false" data-label="Radio 2" data-mode="btn-outline" data-disabled="false" data-required="false" data-invalid="false" data-extra-classes="ps-0"></cod-form-check>
    <cod-form-check data-id="radio-button-3" data-name="radio-button" data-value="radio-button-3" data-type="radio" data-btn-color="primary" data-checked="false" data-label="Radio 3" data-mode="btn-outline" data-disabled="false" data-required="false" data-invalid="false" data-extra-classes="ps-0"></cod-form-check>
  </cod-form-check-group>
</cod-button-group>
`;

export const ButtonToolbar = () => html`
<cod-button-group
  data-type="toolbar"
  data-label="Toolbar with button groups">
  <cod-button-group
  data-type="group"
  data-label="group 1"
  data-extra-classes="me-2">
    <cod-button data-label="1" data-background-color="primary" data-primary="false" data-img-alt="" data-icon=""></cod-button>
    <cod-button data-label="2" data-background-color="primary" data-primary="false" data-img-alt="" data-icon=""></cod-button>
    <cod-button data-label="3" data-background-color="primary" data-primary="false" data-img-alt="" data-icon=""></cod-button>
  </cod-button-group>
  <cod-form-control data-tag="input" data-size="md" data-read-only="false" data-background-color="undefined" data-id="simple-input" data-type="text" data-plain-txt="undefined" data-disabled="undefined" data-required="false" data-placeholder-txt="enter text here"></cod-form-control>
</cod-button-group>
`;

export const Vertical = () => html`
<cod-button-group
  data-type="group"
  data-label="Vertical button group"
  data-vertical="true">
    <cod-button data-label="Button" data-background-color="primary" data-primary="true" data-img-alt="" data-icon=""></cod-button>
    <cod-button data-label="Button" data-background-color="primary" data-primary="true" data-img-alt="" data-icon=""></cod-button>
    <cod-button data-label="Button" data-background-color="primary" data-primary="true" data-img-alt="" data-icon=""></cod-button>
    <cod-button data-label="Button" data-background-color="primary" data-primary="true" data-img-alt="" data-icon=""></cod-button>
    <cod-button data-label="Button" data-background-color="primary" data-primary="true" data-img-alt="" data-icon=""></cod-button>
  </cod-button-group>
`;