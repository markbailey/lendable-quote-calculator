import styles from '../../assets/stylesheets/loan-calculator.module.scss';

export interface LoanRateRepaymentProps {
  currencySymbol: string;
  interestRate: number;
  monthlyRepayment: number;
}

function LoanRateRepayment(props: LoanRateRepaymentProps) {
  const { currencySymbol, interestRate, monthlyRepayment } = props;
  return (
    <section className={styles.repayments}>
      <div aria-label="Interest rate">
        <span className={styles.repaymentValue} aria-labelledby="interestRateLabel">
          {interestRate}%
        </span>
        <small id="interestRateLabel" className={styles.repaymentLabel}>
          Interest rate
        </small>
      </div>

      <div aria-label="Monthly repayment">
        <span className={styles.repaymentValue} aria-labelledby="monthRepaymentLabel">
          {currencySymbol}
          {monthlyRepayment.toFixed(2)}
        </span>
        <small id="monthRepaymentLabel" className={styles.repaymentLabel}>
          Monthly repayment
        </small>
      </div>
    </section>
  );
}

export default LoanRateRepayment;
