import React, { createContext, useState, useEffect } from "react";

const initialState = {
  transactions: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [transactions, setTransactions] = useState([]);

  // Actions
  function deleteTransaction(id) {
    setTransactions((prevTransactions) =>
      prevTransactions.filter((transaction) => transaction.id !== id)
    );
  }

  function createTransaction(transaction) {
    setTransactions((prevTransactions) => [...prevTransactions, transaction]);
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions,
        setTransactions,
        deleteTransaction,
        createTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
