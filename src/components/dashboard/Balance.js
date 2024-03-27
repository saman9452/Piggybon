import React from 'react';

const Balance = ({ transactions }) => {
  let total = 0;
  if (transactions) {
    const amounts = Object.entries(transactions).map(([id, transaction]) => parseFloat(transaction.amount));
    total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
}

  return (
      <div>
          <h5>Your Balance</h5>
          <h3>${total}</h3>
      </div>
  );
};

export default Balance;
