import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
//thunks  permite devolver una funcion 
import thunk from 'redux-thunk';
import reducers from './reduces';

//firebase
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import { firebaseConfig } from '../config/firebaseConfig';
export const rrfConfig = {
    userProfile: 'users'
    // useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
};
// Initialize firebase instance
firebase.initializeApp(firebaseConfig);

// Initialize other services on firebase instance
// firebase.firestore() // <- needed if using firestore
// firebase.functions() // <- needed if using httpsCallable
// Add firebase to reducers
const persistConfig = {
    key: 'root',
    storage: storage,
    stateReconciler: autoMergeLevel2 // see "Merge Process" section for details.
};
const pReducer = persistReducer(persistConfig, reducers);
/*
// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
    reactReduxFirebase(firebase, rrfConfig) // firebase instance as first argument
    // reduxFirestore(firebase) // <- needed if using firestore
)(createStore);
const store = createStoreWithFirebase(pReducer, applyMiddleware(thunk));*/
const store = createStore(
    pReducer,
    applyMiddleware(thunk)
);
export const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch
  };
export const persistor = persistStore(store);
export default store;