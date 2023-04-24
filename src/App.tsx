import loanConfig from './data/loans-config.json';
import LoanCalculator from './components/loan-calculator';

function App() {
  return <LoanCalculator config={loanConfig} onSubmit={(e, loan) => console.log(e, loan)} />;
}

export default App;
