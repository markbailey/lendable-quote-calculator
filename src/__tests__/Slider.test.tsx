// Write tests for the Slider component

import { render, screen } from '@testing-library/react';
import * as loansConfig from '../data/loans-config.json';
import Slider from '../components/Slider';

const {
  range: [min, max],
  step,
} = loansConfig.amount;

let slider: HTMLDivElement;
const onClick = jest.fn();
const onKeyDown = jest.fn();

describe('Slider component', () => {
  beforeAll(() => {
    render(
      <Slider
        data-testid="loanAmount"
        value={min}
        min={min}
        max={max}
        step={step}
        onChange={() => {}}
      />
    );

    slider = screen.getByTestId('loanAmount');
  });

  it('Verify the component renders', async () => {
    expect(slider).toBeInstanceOf(HTMLDivElement);
  });

  it('Verify that the element has aria attributes', async () => {
    const value = slider.getAttribute('aria-valuenow');
    const minValue = slider.getAttribute('aria-valuemin');
    const maxValue = slider.getAttribute('aria-valuemax');
    const role = slider.getAttribute('role');
    const tabIndex = slider.getAttribute('tabindex');

    expect(value).toBe(`${min}`);
    expect(minValue).toBe(`${min}`);
    expect(maxValue).toBe(`${max}`);
    expect(role).toBe('slider');
    expect(tabIndex).toBe('0');
  });

  it('Verify the elements onClick event triggers', async () => {
    slider.addEventListener('click', onClick);
    slider.click();
    slider.removeEventListener('click', onClick);

    expect(onClick).toBeCalledTimes(1);
  });

  it('Verify the elements onKeyDown event trigger', async () => {
    const event = new KeyboardEvent('keydown', { keyCode: 39 }); // right arrow key
    slider.addEventListener('keydown', onKeyDown);
    const keydown = slider.dispatchEvent(event);
    slider.removeEventListener('keydown', onKeyDown);

    expect(keydown).toBe(true);
    expect(onKeyDown).toBeCalledTimes(1);
  });
});
