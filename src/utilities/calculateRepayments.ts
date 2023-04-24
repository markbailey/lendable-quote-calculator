// Using formula from https://www.wikihow.com/Calculate-Loan-Payments
function calculateRepayments(loanAmount: number, loanTerm: number, interestRates: InterestRate[]) {
  const interestRate =
    interestRates.find(({ range: [min, max] }) => min <= loanAmount && max >= loanAmount)
      ?.percent ?? 0;

  const monthlyInterestRate = interestRate / 100 / 12;
  const pow = 1 / Math.pow(1 + monthlyInterestRate, loanTerm);
  const monthlyInterest = monthlyInterestRate / (1 - pow);
  const monthlyRepayment = Math.round((monthlyInterest * loanAmount + Number.EPSILON) * 100) / 100;

  return Object.freeze({ interestRate, monthlyRepayment });
}

export default calculateRepayments;
