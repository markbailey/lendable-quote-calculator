import { FormEvent, HTMLAttributes, useState } from 'react';
import classNames from 'classnames';

import calculateRepayments from '../../utilities/calculateRepayments';
import { ReactComponent as DoubleArrowRightIcon } from '../../assets/svg/double_arrow_right.svg';
import Button from '../Button';
import LoanAmountTerm from './LoanAmountTerm';
import LoanRateRepayment from './LoanRepayment';
import styles from '../../assets/stylesheets/loan-calculator.module.scss';

export interface LoanCalculatorProps extends Omit<HTMLAttributes<HTMLFormElement>, 'onSubmit'> {
  config: LoanConfig;
  onSubmit(event: FormEvent<HTMLFormElement>, loan: Loan): void;
}

function LoanCalculator(props: LoanCalculatorProps) {
  const { className: classNameProp, config, onSubmit, ...otherProps } = props;
  const className = classNames(styles.calculator, classNameProp);

  const [loan, setLoan] = useState<Loan>(() => {
    const [minLoanAmount] = config.amount.range;
    const [minLoanTerm] = config.term.range;
    const amount = minLoanAmount;
    const { interestRate, monthlyRepayment } = calculateRepayments(
      amount,
      minLoanTerm,
      config.interestRates
    );

    const newLoan: Loan = {
      currency: config.currency,
      amount,
      term: minLoanTerm,
      interestRate,
      monthlyRepayment,
    };

    return newLoan;
  });

  const onFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(event, loan);
  };

  const updateLoan = (key: keyof Loan) => (value: number) => {
    const newLoan = { ...loan, [key]: value };
    const repayments = calculateRepayments(newLoan.amount, newLoan.term, config.interestRates);
    setLoan({ ...newLoan, ...repayments });
  };

  return (
    <form {...otherProps} className={className} onSubmit={onFormSubmit}>
      <LoanAmountTerm
        config={config}
        amount={loan.amount}
        term={loan.term}
        onAmountChange={updateLoan('amount')}
        onTermChange={updateLoan('term')}
      />

      <LoanRateRepayment
        currencySymbol={loan.currency.symbol}
        interestRate={loan.interestRate}
        monthlyRepayment={loan.monthlyRepayment}
      />

      <footer className={styles.actions}>
        <Button primary block>
          <span>Get your quote</span>
          <DoubleArrowRightIcon width={16} height={16} />
        </Button>
      </footer>
    </form>
  );
}

export default LoanCalculator;
