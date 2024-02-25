import Balance from './Balance';
import IncomeExpenses from './IncomeExpenses';
import TransactionsList from './TransactionsList';
import AddTransaction from './AddTransaction';

const Dashboard = ({}) => {
    return (
        <div className='container'>
            <Balance />
            <IncomeExpenses />
            <TransactionsList />
            <AddTransaction />
        </div>
    )
}
export default Dashboard;