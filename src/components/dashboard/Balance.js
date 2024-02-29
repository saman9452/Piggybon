import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';

const Balance = () => {
    const { transactions } = useContext(GlobalContext);
    const amounts = transactions.map(transaction => {
        return transaction.amount;
    });
    // console.log(amounts); // Add this line to log the values
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    return (
        <div>
            <h5>Your Balance</h5>
            <h3>${total}</h3>
        </div>
    );
};

export default Balance;
