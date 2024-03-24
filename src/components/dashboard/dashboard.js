import React, { Component } from 'react';
import Balance from './Balance';
import IncomeExpenses from './IncomeExpenses';
import TransactionsList from './TransactionsList';
import AddTransaction from './AddTransaction';
import { connect } from 'react-redux';
import { compose } from "redux";
import { Redirect } from 'react-router-dom';
import { firestoreConnect, withFirestore  } from "react-redux-firebase";


class Dashboard extends Component {
    render() {
        const { auth, transactions } = this.props;

        if (!auth.uid) return <Redirect to='/signin' /> 

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

export default compose(
    connect((state) => ({
        uid: state.firebase.auth.uid,
        auth: state.firebase.auth,
        transactions: state.firestore.data.transactions,
    })),
    withFirestore,
    firestoreConnect((ownProps) => {

        if (!ownProps.uid) return [];
        return [
            {
                collection: 'transactions',
                where: [['UserId', '==', ownProps.uid]],
                // orderBy: ["createdAt", "desc"],
            }
        ];
    }),
)(Dashboard);