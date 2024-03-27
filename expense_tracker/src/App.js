import './App.css';
import { AddTransaction } from './components/AddTransaction';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { Header } from './components/header';
import { TransactionList } from './components/transactionList';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className='side'>
      <div className='container1'>
        <Balance />
        <IncomeExpenses />
      </div>
      <div className='container'>
        <AddTransaction />
      </div>
      <div className='container'>
      <TransactionList />
      </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
