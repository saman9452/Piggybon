import React from 'react';
import Transaction from './Transaction';

const TransactionsList = (transactions) => {
  const data = transactions.transactions;

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {data && Object.entries(data).map(([id, transaction]) => (
          <Transaction key={id} transaction={{ id, ...transaction }} />
        ))}
      </ul>
    </>
  );
};

  export default TransactionsList;