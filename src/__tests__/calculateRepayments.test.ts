import * as loansConfig from '../data/loans-config.json';
import calculateRepayments from '../utilities/calculateRepayments';

describe('calculateRepayments utility function', () => {
  it('Verify the function returns the correct values', () => {
    const { interestRate, monthlyRepayment } = calculateRepayments(
      1000,
      12,
      loansConfig.interestRates
    );

    expect(interestRate).toBe(5);
    expect(monthlyRepayment).toBe(85.61);
  });
});
