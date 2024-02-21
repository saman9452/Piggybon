import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

const AddTransaction = () => {
    const [text, setText] = useState(''); // text: current state value. setText: function that allows you to update the state value
    const [amount, setAmount] = useState('');
    const [type, setType] = useState('expense');

    const createTransaction = async (e) => {
        e.preventDefault();
        if (text === '' || isNaN(parseFloat(amount))) {
            alert('Please enter a valid amount');
            return;
        }
        await addDoc(collection(db, 'expenses'), {
            text,
            amount: type == "expense" ? -parseFloat(amount) : parseFloat(amount),
            type: type
        });
        setText('');
        setAmount('');
    };

    return (
        <div>
            <h3>Add new transaction</h3>
            <form onSubmit={createTransaction}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount</label>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
                </div>
                <div className="form-control">
                    <label>Type:</label>
                    <div>
                        <input type="radio" id="expense" name="type" value="expense" checked={type === 'expense'} onChange={() => setType('expense')} />
                        <label htmlFor="expense">Expense</label>
                    </div>
                    <div>
                        <input type="radio" id="income" name="type" value="income" checked={type === 'income'} onChange={() => setType('income')} />
                        <label htmlFor="income">Income</label>
                    </div>
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </div>
    );
};

export default AddTransaction;
