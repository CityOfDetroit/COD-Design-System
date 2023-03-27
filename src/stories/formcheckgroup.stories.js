import { html } from 'lit-html';
import '../components/molecules/FormCheckGroup/cod-form-check-group';

export default {
  title: 'COD/Molecules/Forms/FormCheckGroup',
};

export const RadioGroup = () => html`
<cod-form-check-group
  data-type="radio">
  <cod-form-check
  data-id="radio-group-test-1"
  data-type="radio"
  data-label="Option 1"
  data-required="true"
  data-value="option 1"
  data-name="radio-group-test"
  data-mode="check-inline"
  data-valueMissing="Please select one"
  ></cod-form-check>
  <cod-form-check
  data-id="radio-group-test-2"
  data-type="radio"
  data-label="Option 2"
  data-required="true"
  data-value="option 2"
  data-name="radio-group-test"
  data-mode="check-inline"
  data-valueMissing="Please select one"
  ></cod-form-check>
  <cod-form-check
  data-id="radio-group-test-3"
  data-type="radio"
  data-label="Option 3"
  data-required="true"
  data-value="option 3"
  data-name="radio-group-test"
  data-mode="check-inline"
  data-valueMissing="Please select one"
  ></cod-form-check>
</cod-form-check-group>
`;

export const CheckboxGroup = () => html`
<cod-form-check-group
  data-type="checkbox"
  data-required="true">
  <cod-form-check
  data-id="check-group-test-1"
  data-type="checkbox"
  data-label="Check 1"
  data-required="true"
  data-value="Check 1"
  data-name="check-group-test"
  data-mode="check-inline"
  data-valueMissing="Please select one"
  ></cod-form-check>
  <cod-form-check
  data-id="check-group-test-2"
  data-type="checkbox"
  data-label="Check 2"
  data-required="true"
  data-value="Check 2"
  data-name="check-group-test"
  data-mode="check-inline"
  data-valueMissing="Please select one"
  ></cod-form-check>
  <cod-form-check
  data-id="check-group-test-3"
  data-type="checkbox"
  data-label="Check 3"
  data-required="true"
  data-value="Check 3"
  data-name="check-group-test"
  data-mode="check-inline"
  data-valueMissing="Please select one"
  ></cod-form-check>
</cod-form-check-group>
`;