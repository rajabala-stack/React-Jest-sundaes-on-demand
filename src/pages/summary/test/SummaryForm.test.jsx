import { render, fireEvent, screen } from '@testing-library/react';
import SummaryForm from '../SummaryForm';

describe('Initial Conditions', () => {
  test('check box is unchecked by default', () => {
    render(<SummaryForm />);
    const checkbox = screen.getByRole('checkbox', {
      name: /terms and conditions/i,
    });
    expect(checkbox).not.toBeChecked();
  });
  test('button is disabled by default', () => {
    render(<SummaryForm />);
    const button = screen.getByRole('button', { name: /confirm order/i });
    expect(button).toBeDisabled();
  });
});

test('button enbled/disabled by checkbox', () => {
  render(<SummaryForm />);
  const checkbox = screen.getByRole('checkbox', {
    name: /terms and conditions/i,
  });
  const button = screen.getByRole('button', { name: /confirm order/i });
  fireEvent.click(checkbox);
  expect(button).toBeEnabled();
  fireEvent.click(checkbox);
  expect(button).toBeDisabled();
});
