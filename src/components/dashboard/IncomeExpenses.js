import React from 'react';

const IncomeExpenses = ({ transactions }) => {
  let income = 0;
  let expense = 0;
  
  if (transactions) {
    
    const amounts = Object.entries(transactions).map(([id, transaction]) => parseFloat(transaction.amount));

    console.log(amounts);
    income = amounts
      .filter(item => item > 0)
      .reduce((acc, item) => acc + item, 0)
      .toFixed(2);

    expense = (
      amounts
        .filter(item => item < 0)
        .reduce((acc, item) => acc + item, 0) *
      -1
    ).toFixed(2);
  }

  return (
    <div className="inc-exp-container">
      <div>
        <h5>Income</h5>
        <p className="money plus">+${income}</p>
      </div>
      <div>
        <h5>Expense</h5>
        <p className="money minus">-${expense}</p>
      </div>
    </div>
  );
};

export default IncomeExpenses;
