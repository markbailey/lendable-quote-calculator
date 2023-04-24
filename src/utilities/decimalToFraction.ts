import gcd from './gcd';

function decimalToFraction(decimal: number) {
  const denominator = 100;
  // remove the left side of the decimal point
  const wholeNumber = Math.floor(decimal);
  // remove the right side of the decimal point and multiply by 100
  const decimalPart = decimal - wholeNumber;
  const numerator = decimalPart * denominator;
  const divisor = gcd(numerator, denominator);
  const left = numerator / divisor;
  const right = denominator / divisor;

  return Object.freeze({
    wholeNumber,
    fraction: left > 0 ? `${left}/${right}` : null,
    htmlEntity: left > 0 ? `&frac${left}${right};` : null,
  });
}

export default decimalToFraction;
