import { render } from '@testing-library/react';
import * as loansConfig from '../data/loans-config.json';
import LoanCalculator from '../components/loan-calculator';

let calculator: HTMLFormElement | null;
const onSubmit = jest.fn();

describe('LoanCalculator component', () => {
  beforeEach(() => {
    const { container } = render(<LoanCalculator config={loansConfig} onSubmit={onSubmit} />);
    calculator = container.querySelector<HTMLFormElement>('form');
  });

  it('Verify the component renders', () => {
    expect(calculator).toBeInstanceOf(HTMLFormElement);
  });

  it('Verify all controls render', () => {
    const sliders = calculator?.querySelectorAll('[role="slider"]');
    const button = calculator?.querySelector('button');

    expect(sliders).toHaveLength(2);
    expect(button).toBeInstanceOf(HTMLButtonElement);
  });

  it('Verify the form is submitted', () => {
    const button = calculator?.querySelector('button');
    button?.click();

    expect(onSubmit).toHaveBeenCalled();
  });
});
