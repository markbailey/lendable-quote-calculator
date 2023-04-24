// Using formula from https://www.wikihow.com/Calculate-Loan-Payments
function calculateRepayments(loanAmount: number, loanTerm: number, interestRates: InterestRate[]) {
  const interestRate =
    interestRates.find(({ range: [min, max] }) => min <= loanAmount && max >= loanAmount)
      ?.percent ?? 0;

  const monthlyInterestRate = interestRate / 100 / 12;
  const pow = Math.pow(1 + monthlyInterestRate, -loanTerm);
  const monthlyRepayment = loanAmount * (monthlyInterestRate / (1 - pow));

  return Object.freeze({
    interestRate,
    monthlyRepayment: Math.round(monthlyRepayment * 100) / 100,
  });
}

export default calculateRepayments;
