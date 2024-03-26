import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createTransaction } from '../../store/actions/transactionActions';
import { compose } from "redux";
import { firestoreConnect, withFirestore  } from "react-redux-firebase";

class AddTransaction extends Component {

    state = {
        title: '',
        amount: '',
        type: 'expense',
        category: 'Pet'
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.createTransaction(this.state);
        document.getElementById("addTransactionForm").reset();
        console.log(this.state);
    }

    handleChange = (e) => {
        this.setState({
          [e.target.id]: e.target.value
        })
      }

    render() {
        const { auth, categories } = this.props;
        console.log(categories);
        return (
            <div className='container'>
                <form id="addTransactionForm" className="white" onSubmit={this.handleSubmit}>
                    <h5>Add new transaction</h5>
                    <div className="input-field">
                        <label htmlFor="text">Title</label>
                        <input type="text" id='title' onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="amount">Amount</label>
                        <input type="number" id="amount" onChange={this.handleChange} />
                    </div>
                    <div className="row">
                        <label>Type:</label>
                        <p>
                            <label>
                                <input name="type" type="radio" id="type" value="expense" checked={this.state.type === 'expense'} onChange={this.handleChange}  />
                                <span>Expense</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input name="type" type="radio" id="type" value="income" checked={this.state.type === 'income'} onChange={this.handleChange}  />
                                <span>Income</span>
                            </label>
                        </p>
                    </div>
                    <div className="row">
                        <label htmlFor="category">Category</label>
                        <select className="" id="selectedCategory" onChange={this.handleChange}>
                            <option value="" disabled>Choose your option</option>
                            {categories && Object.entries(categories).map(([id, category]) => (
                                <option key={id} value={category.name}>{category.name}</option>
                            ))}
                        </select>
                    </div>
                    <button type="submit" className="btn">Add transaction</button>
                </form>
            </div>
        );
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        createTransaction: (transaction) => dispatch(createTransaction(transaction))
    }
}

export default compose(
    connect((state) => ({
        uid: state.firebase.auth.uid,
        auth: state.firebase.auth,
        categories: state.firestore.data.categories,
    }),
    mapDispatchToProps
    ),
    withFirestore,
    firestoreConnect(() => {

        return [
            {
                collection: 'categories',
            }
        ];
    }),
)(AddTransaction);
