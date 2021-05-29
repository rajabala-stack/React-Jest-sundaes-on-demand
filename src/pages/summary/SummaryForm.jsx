import Popover from 'react-bootstrap/Popover';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
export default function SummaryForm() {
  const [disabled, setDisabled] = useState(false);

  const popover = (
    <Popover id='popover-basic'>
      <Popover.Content>No ice cream will actually be delivered</Popover.Content>
    </Popover>
  );
  const checkboxLabel = (
    <label htmlFor='terms-and-conditions'>
      I agree to{' '}
      <OverlayTrigger placement='right' overlay={popover}>
        <span style={{ color: 'blue' }}>Terms and conditions</span>
      </OverlayTrigger>
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
      <Button disabled={!disabled}>Confirm Order</Button>
    </Form>
  );
}
