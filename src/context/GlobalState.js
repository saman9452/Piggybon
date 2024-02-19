import React, {createContext, useReducer} from "react";
import AppReducer from './AppReducer';


const initialState = {
    transactions: []
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //Actions
    function deleteTransaction (id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    function createTransaction (transaction){
        dispatch({
            type: 'CREATE_TRANSACTION',
            payload: transaction
        });
    }

    return(<GlobalContext.Provider value={{
         transactions: state.transactions,
         deleteTransaction,
         createTransaction
         }}>
        {children}
    </GlobalContext.Provider>);
  
}