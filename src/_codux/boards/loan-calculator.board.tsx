import { createBoard } from '@wixc3/react-board';
import loansConfig from '../../data/loans-config.json';
import LoanCalculator from '../../components/loan-calculator';

export default createBoard({
  name: 'LoanCalculator',
  Board: () => <LoanCalculator config={loansConfig} onSubmit={(e, loan) => console.log(e, loan)} />,
});
