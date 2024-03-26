import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { Provider, useSelector } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './store/reducers/rootReducer';
import { createFirestoreInstance } from 'redux-firestore';
import { getFirebase, ReactReduxFirebaseProvider, isLoaded } from 'react-redux-firebase'; //reactReduxFirebase,
import firebase from './config/firebase';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

const store = createStore(
    rootReducer,
    applyMiddleware(thunk.withExtraArgument({ getFirebase }))
  );

const rrfProps = {
    firebase,
    config: {},
    dispatch: store.dispatch,
    createFirestoreInstance,
  };

  function AuthIsLoaded({ children }) {
    const auth = useSelector(state => state.firebase.auth);
    if (!isLoaded(auth))
      return (
        <div className="text-center">
          <div
            className="spinner-grow text-primary"
            style={{ width: "7rem", height: "7rem" }}
            role="status"
          >
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      );
    return children;
  }

ReactDOM.render(
    <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
        <ThemeProvider theme={theme}> {/* Wrap your App with ThemeProvider */}
                <AuthIsLoaded>
                    <App />
                </AuthIsLoaded>
            </ThemeProvider>
        </ReactReduxFirebaseProvider>
    </Provider>,
    document.getElementById('root')
);

