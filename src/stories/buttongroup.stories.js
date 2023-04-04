import { html } from 'lit-html';
import '../components/molecules/ButtonGroup/cod-button-group';

export default {
  title: 'COD/Molecules/Forms/ButtonGroup',
};

export const Basic = () => html`
<cod-button-group
  data-type="group"
  data-label="basic example">
  <cod-button data-label="Left" data-background-color="color-1" data-primary="true" data-img-alt="" data-icon=""></cod-button>
  <cod-button data-label="Middle" data-background-color="color-1" data-primary="true" data-img-alt="" data-icon=""></cod-button>
  <cod-button data-label="Right" data-background-color="color-1" data-primary="true" data-img-alt="" data-icon=""></cod-button>
</cod-button-group>
`;

export const Mixed = () => html`
<cod-button-group
  data-type="group"
  data-label="basic example">
  <cod-button data-label="Left" data-background-color="color-1" data-primary="true" data-img-alt="" data-icon=""></cod-button>
  <cod-button data-label="Middle" data-background-color="color-3" data-primary="true" data-img-alt="" data-icon=""></cod-button>
  <cod-button data-label="Right" data-background-color="color-4" data-primary="true" data-img-alt="" data-icon=""></cod-button>
</cod-button-group>
`;

export const Outlined = () => html`
<cod-button-group
  data-type="group"
  data-label="basic example">
  <cod-button data-label="Left" data-background-color="color-1" data-primary="false" data-img-alt="" data-icon=""></cod-button>
  <cod-button data-label="Middle" data-background-color="color-1" data-primary="false" data-img-alt="" data-icon=""></cod-button>
  <cod-button data-label="Right" data-background-color="color-1" data-primary="false" data-img-alt="" data-icon=""></cod-button>
</cod-button-group>
`;

export const CheckboxButtonGroup = () => html`
<cod-button-group
  data-type="group"
  data-label="basic example">
  <cod-form-check data-id="checkbox-button-1" data-name="checkbox-button" data-value="checkbox-button-1" data-type="checkbox" data-btn-color="primary" data-checked="false" data-label="Checkbox 1" data-mode="btn" data-disabled="false" data-required="false" data-invalid="false"></cod-form-check>
  <cod-form-check data-id="checkbox-button-2" data-name="checkbox-button" data-value="checkbox-button-2" data-type="checkbox" data-btn-color="primary" data-checked="false" data-label="Checkbox 2" data-mode="btn" data-disabled="false" data-required="false" data-invalid="false"></cod-form-check>
  <cod-form-check data-id="checkbox-button-3" data-name="checkbox-button" data-value="checkbox-button-3" data-type="checkbox" data-btn-color="primary" data-checked="false" data-label="Checkbox 3" data-mode="btn" data-disabled="false" data-required="false" data-invalid="false"></cod-form-check>
</cod-button-group>
<br>
<cod-button-group
  data-type="group"
  data-label="basic example">
  <cod-form-check-group
  data-type="radio">
  <cod-form-check data-id="radio-button-1" data-name="radio-button" data-value="radio-button-1" data-type="radio" data-btn-color="primary" data-checked="false" data-label="Radio 1" data-mode="btn-outline" data-disabled="false" data-required="false" data-invalid="false"></cod-form-check>
  <cod-form-check data-id="radio-button-2" data-name="radio-button" data-value="radio-button-2" data-type="radio" data-btn-color="primary" data-checked="false" data-label="Radio 2" data-mode="btn-outline" data-disabled="false" data-required="false" data-invalid="false"></cod-form-check>
  <cod-form-check data-id="radio-button-3" data-name="radio-button" data-value="radio-button-3" data-type="radio" data-btn-color="primary" data-checked="false" data-label="Radio 3" data-mode="btn-outline" data-disabled="false" data-required="false" data-invalid="false"></cod-form-check>
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
    <cod-button data-label="1" data-background-color="color-1" data-primary="false" data-img-alt="" data-icon=""></cod-button>
    <cod-button data-label="2" data-background-color="color-1" data-primary="false" data-img-alt="" data-icon=""></cod-button>
    <cod-button data-label="3" data-background-color="color-1" data-primary="false" data-img-alt="" data-icon=""></cod-button>
  </cod-button-group>
  <cod-form-control data-tag="input" data-size="md" data-read-only="false" data-background-color="undefined" data-id="simple-input" data-type="text" data-plain-txt="undefined" data-disabled="undefined" data-required="false" data-placeholder-txt="enter text here"></cod-form-control>
</cod-button-group>
`;

export const Vertical = () => html`
<cod-button-group
  data-type="group"
  data-label="Vertical button group"
  data-vertical="true">
    <cod-button data-label="Button" data-background-color="color-1" data-primary="true" data-img-alt="" data-icon=""></cod-button>
    <cod-button data-label="Button" data-background-color="color-1" data-primary="true" data-img-alt="" data-icon=""></cod-button>
    <cod-button data-label="Button" data-background-color="color-1" data-primary="true" data-img-alt="" data-icon=""></cod-button>
    <cod-button data-label="Button" data-background-color="color-1" data-primary="true" data-img-alt="" data-icon=""></cod-button>
    <cod-button data-label="Button" data-background-color="color-1" data-primary="true" data-img-alt="" data-icon=""></cod-button>
  </cod-button-group>
`;