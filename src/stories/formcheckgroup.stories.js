import { html } from 'lit-html';
import './formcheckgroup';

export default {
  title: 'COD/Atoms/Forms/FormCheckGroup',
};

export const RadioGroup = () => html`
<cod-form-check-group>
    <cod-form-check
    data-id="radio-group-test-1"
    data-type="radio"
    data-label="Option 1"
    data-required="true"
    data-value="option 1"
    data-name="radio-group-test"
    data-valueMissing="Please select one"
    ></cod-form-check>
    <cod-form-check
    data-id="radio-group-test-2"
    data-type="radio"
    data-label="Option 2"
    data-required="true"
    data-value="option 2"
    data-name="radio-group-test"
    data-valueMissing="Please select one"
    ></cod-form-check>
    <cod-form-check
    data-id="radio-group-test-3"
    data-type="radio"
    data-label="Option 3"
    data-required="true"
    data-value="option 3"
    data-name="radio-group-test"
    data-valueMissing="Please select one"
    ></cod-form-check>
</cod-form-check-group>
`;