import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

export default function SummaryForm() {
  const [disabled, setDisabled] = useState(false);
  const checkboxLabel = (
    <label htmlFor='terms-and-conditions'>
      I agree to <span style={{ color: 'blue' }}>Terms and conditions</span>
    </label>
  );
  return (
    <Form>
      <Form.Group controlId='terms-and-conditions'>
        <Form.Check
          type='checkbox'
          checked={disabled}
          onChange={() => setDisabled(!disabled)}
          label={checkboxLabel}
        />
      </Form.Group>
      <button disabled={!disabled}>Confirm Order</button>
    </Form>
  );
}
