import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rooteducer from './store/reducers/rootReducer';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import fbConfig from './config/firebase'

const store = createStore(rooteducer, compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})), // this is a store enhancer
    reduxFirestore(fbConfig), 
    reactReduxFirebase(fbConfig)
));


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

