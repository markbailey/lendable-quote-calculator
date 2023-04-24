import decimalToFraction from '../utilities/decimalToFraction';

describe('decimalToFraction utility function', () => {
  it('Verify the function returns the correct values', () => {
    const { wholeNumber, fraction, htmlEntity } = decimalToFraction(0.5);
    expect(wholeNumber).toBe(0);
    expect(fraction).toBe('1/2');
    expect(htmlEntity).toBe('&frac12;');
  });
});
