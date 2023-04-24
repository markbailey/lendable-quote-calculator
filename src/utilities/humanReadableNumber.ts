const humanReadableNumber = (amount: number, isDecimal: boolean = false) =>
  amount.toFixed(isDecimal ? 2 : 0).replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export default humanReadableNumber;
