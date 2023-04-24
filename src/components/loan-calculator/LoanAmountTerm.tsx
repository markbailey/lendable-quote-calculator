import Slider from '../Slider';
import styles from '../../assets/stylesheets/loan-calculator.module.scss';
import humanReadableNumber from '../../utilities/humanReadableNumber';
import decimalToFraction from '../../utilities/decimalToFraction';

export interface LoamAmountTermProps {
  config: LoanConfig;
  amount: number;
  term: number;
  onAmountChange(amount: number): void;
  onTermChange(term: number): void;
}

function LoanAmountTerm(props: LoamAmountTermProps) {
  const { config, amount, term, onAmountChange, onTermChange } = props;
  const [minAmount, maxAmount] = config.amount.range;
  const [minTerm, maxTerm] = config.term.range;

  const getHumanReadableTerm = (term: number) => {
    const { wholeNumber, htmlEntity } = decimalToFraction(term / 12);
    const parser = new DOMParser();
    const fraction = parser.parseFromString(htmlEntity ?? '', 'text/html').body.textContent;
    const suffix = wholeNumber === 1 ? '' : 's';
    return `${wholeNumber}${fraction} year${suffix}`;
  };

  return (
    <section className={styles.sliderOptions}>
      <div className={styles.sliderGroup}>
        <label id="loanAmountLabel" className={styles.sliderLabel}>
          <span>I want to borrow</span>
          <span className={styles.sliderValue}>
            {config.currency.symbol}
            {humanReadableNumber(amount)}
          </span>
        </label>

        <Slider
          min={minAmount}
          max={maxAmount}
          step={config.amount.step}
          value={amount}
          onChange={onAmountChange}
          aria-labelledby="loanAmountLabel"
        />
      </div>

      <div className={styles.sliderGroup}>
        <label id="loanTermLabel" className={styles.sliderLabel}>
          <span>over</span>
          <span className={styles.sliderValue}>{getHumanReadableTerm(term)}</span>
        </label>

        <Slider
          min={minTerm}
          max={maxTerm}
          step={config.term.step}
          value={term}
          notches
          onChange={onTermChange}
          aria-labelledby="loanTermLabel"
        />
      </div>
    </section>
  );
}

export default LoanAmountTerm;
