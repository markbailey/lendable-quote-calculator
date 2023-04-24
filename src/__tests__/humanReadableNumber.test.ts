import humanReadableNumber from '../utilities/humanReadableNumber';

describe('humanReadableNumber utility function', () => {
  it('Verify the function returns the correct formatted value', () => {
    const result = humanReadableNumber(1000000);
    expect(result).toBe('1,000,000');
  });

  it('Verify the function returns the correct formatted value with decimal', () => {
    const result = humanReadableNumber(1000.5, true);
    expect(result).toBe('1,000.50');
  });
});
