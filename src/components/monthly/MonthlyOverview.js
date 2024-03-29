import React, {Component} from "react";
import { compose } from "redux";
import { connect } from 'react-redux';
import { firestoreConnect, withFirestore  } from "react-redux-firebase";
import CashFlow from "./CashFlow";

class MonthlyOverview extends Component {

    render () {
        let expenseTransactions = [];
        let incomeValue = 0;
        let expenseValue = 0;

        let incomeTransactions = [];
        const { transactions } = this.props;


        if (transactions) {
            const startDate = new Date(2024, 2, 1); // March 1, 2024
            const endDate = new Date(2024, 2, 29); // March 29, 2024


            const monthlyTransactions = Object.entries(transactions).filter(([_, transaction]) => {
                const transactionDate = new Date(transaction.createdAt.seconds * 1000);
                return transactionDate >= startDate && transactionDate <= endDate;
            });
            

           incomeTransactions = monthlyTransactions.filter(([_, item]) => item.type === "income");
           incomeValue = incomeTransactions.reduce((acc, [_, item]) => acc + parseFloat(item.amount), 0).toFixed(2);

           expenseTransactions = monthlyTransactions.filter(([_, item]) => item.type === "expense");
           expenseValue = -(expenseTransactions.reduce((acc, [_, item]) => acc + parseFloat(item.amount), 0).toFixed(2));
        }
        

        return (
            <CashFlow spending= {expenseValue} income={incomeValue}/>
        );
    }
}

export default compose(
    connect((state) => ({
        uid: state.firebase.auth.uid,
        transactions: state.firestore.data.transactions,
    })),
    withFirestore,
    firestoreConnect((ownProps) => {
        if (!ownProps.uid) return [];

        return [
            {
                collection: 'transactions',
                where: [
                    ['UserId', '==', ownProps.uid],
                    // ['createdAt', '>=', startDate],
                    // ['createdAt', '<=', endDate] // ToDo: Fix this
                ],
                // orderBy: ["createdAt", "desc"],
            }
        ];
    }),
)(MonthlyOverview);