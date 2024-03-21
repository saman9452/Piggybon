import React, { Component } from 'react';
import Balance from './Balance';
import IncomeExpenses from './IncomeExpenses';
import TransactionsList from './TransactionsList';
import AddTransaction from './AddTransaction';
import { connect } from 'react-redux';

class Dashboard extends Component {
    render() {
        const { transactions } = this.props;

        return (
            <div className='container'>
                <Balance />
                <IncomeExpenses />
                <TransactionsList transactions={transactions} />
                <AddTransaction />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        transactions: state.transaction.transactions
    }
  }

  export default connect(mapStateToProps)(Dashboard)