export const createTransaction = (transaction) => {

  return (dispatch, getState, {getFirebase}) => {
    // make async call to database
    const firestore = getFirebase().firestore();
    const userId = getState().firebase.auth.uid;
    

    firestore.collection('transactions').add({
      ...transaction,
      UserId: userId,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_TRANSACTION_SUCCESS' });
    }).catch(err => {
      dispatch({ type: 'CREATE_TRANSACTION_ERROR' }, err);
    });
  }
};


// Define action types
export const FETCH_TRANSACTIONS = 'FETCH_TRANSACTIONS';

// Define action creators
export const fetchTransactions = (transactions) => {
  return {
    type: FETCH_TRANSACTIONS,
    payload: transactions,
  };
};