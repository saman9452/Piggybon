export const createTransaction = (transaction) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
      // make async call to database
      const firestore = getFirestore();
      firestore.collection('transactions').add({
        ...transaction,
        Username:'Saman9452',
        createdAt: new Date()
      }).then(() => {
        dispatch({ type: 'CREATE_TRANSACTION_SUCCESS' });
      }).catch(err => {
        dispatch({ type: 'CREATE_TRANSACTION_ERROR' }, err);
      });
    }
  };