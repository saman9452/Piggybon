import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import {
  doc,
  deleteDoc,
} from 'firebase/firestore';
import { db } from '../../firebase';


const Transaction = ({transaction}) => {
  console.log(transaction);

  const sign = transaction.amount < 0 ? '-' : '+';

    // Delete todo
    const deleteTransaction = async (id) => {
      await deleteDoc(doc(db, 'expenses', id));
    };

    // Convert Firestore timestamp object to JavaScript Date object
    const timestamp = new Date(transaction.date.seconds * 1000);

    // Format the date
    const formattedDate = timestamp.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: '2-digit',
    });

  return (
    <li className={transaction.amount<0 ? "minus": "plus"}>
      <div>
        {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span>
      </div>
      <div className='subtext'>
        <span>{transaction.category}</span> <span>{formattedDate}</span>
      </div>
      <button onClick={ () => deleteTransaction(transaction.id)} className="delete-btn">x</button>
    </li>
  )
}

export default Transaction
