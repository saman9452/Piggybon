import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import {
  doc,
  deleteDoc,
} from 'firebase/firestore';
import { db } from '../../config/firebase';


const Transaction = ({transaction}) => {

  const sign = transaction.amount < 0 ? '-' : '+';

    // const deleteTransaction = async (id) => {
    //   await deleteDoc(doc(db, 'expenses', id));
    // };

    const timestamp = new Date(transaction.createdAt.seconds * 1000);

    const formattedDate = timestamp.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: '2-digit',
    });

  return (
    <li className={transaction.type =="expense" ? "minus": "plus"}>
      <div>
        {transaction.title} <span>{sign}${Math.abs(transaction.amount)}</span>
      </div>
      <div className='subtext'>
        <span>{transaction.category}</span> <span>{formattedDate}</span>
      </div>
      {/* <button onClick={ () => deleteTransaction(transaction.id)} className="delete-btn">x</button> */}
    </li>
  )
}

export default Transaction
