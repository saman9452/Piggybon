import React, { Component, Suspense } from 'react';
import { connect } from 'react-redux';
import { compose } from "redux";
import { Redirect } from 'react-router-dom';
import { firestoreConnect, withFirestore  } from "react-redux-firebase";
const Balance = React.lazy(() => import('./Balance'));
const IncomeExpenses = React.lazy(() => import('./IncomeExpenses'));
const TransactionsList = React.lazy(() => import('./TransactionsList'));
const AddTransaction = React.lazy(() => import('./AddTransaction'));


class Dashboard extends Component {
    render() {
        const { auth, transactions } = this.props;
        // console.log(transactions);

        if (!auth.uid) return <Redirect to='/signin' /> 

        return (
            <div className='container'>
                <Suspense fallback={<div>Loading...</div>}>
                    <Balance transactions={transactions} />
                    <IncomeExpenses transactions={transactions} />
                    <TransactionsList transactions={transactions} />
                    <AddTransaction />
                </Suspense>
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