import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import {
  doc,
  deleteDoc,
} from 'firebase/firestore';
import { db } from '../firebase';


const Transaction = ({transaction}) => {

  const sign = transaction.amount < 0 ? '-' : '+';

    // Delete todo
    const deleteTransaction = async (id) => {
      await deleteDoc(doc(db, 'expenses', id));
    };

  return (
    <li className={transaction.amount<0 ? "minus": "plus"}>
        {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span><button onClick={ () => deleteTransaction(transaction.id)} className="delete-btn">x</button>
    </li>
  )
}

export default Transaction
