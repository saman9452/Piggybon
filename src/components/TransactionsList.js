import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';
import Transaction from './Transaction';
import { db } from '../firebase';
import { query, collection, onSnapshot } from 'firebase/firestore';

const TransactionsList = () => {
  const { transactions, setTransactions } = useContext(GlobalContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const q = query(collection(db, 'expenses'));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        let expenseArr = [];
        querySnapshot.forEach((doc) => {
          expenseArr.push({ ...doc.data(), id: doc.id });
        });
        setTransactions(expenseArr);
        setLoading(false); // Set loading state to false when data fetching is complete
      });

      // Cleanup function
      return () => {
        unsubscribe();
      };
    };

    fetchData();
  }, [setTransactions]);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {loading ? (
          <p>Loading...</p>
        ) : (
          transactions.map((transaction) => (
            <Transaction key={transaction.id} transaction={transaction} />
          ))
        )}
      </ul>
    </>
  );
};

export default TransactionsList;
