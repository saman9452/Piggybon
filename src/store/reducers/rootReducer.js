import authReducer from "./authReducer";
import transactionReducer from "./transactionReducer";

import { combineReducers } from "redux";

const rooteducer = combineReducers({
    auth: authReducer,
    transaction: transactionReducer
});

export default rooteducer;