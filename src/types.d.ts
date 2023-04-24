type Key = 'step' | 'percent';
declare type InterestRate = Omit<LoanOption, 'step'> & { percent: number };

interface Currency {
  name: string;
  symbol: string;
}

interface LoanOption {
  range: number[];
  step: number;
}

interface LoanConfig {
  currency: Currency;
  amount: LoanOption;
  term: LoanOption;
  interestRates: InterestRate[];
}

interface Loan {
  currency: Currency;
  amount: number;
  term: number;
  interestRate: number;
  monthlyRepayment: number;
}
