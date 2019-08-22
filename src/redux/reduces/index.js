import { combineReducers } from 'redux';
import superheroeReducer from './superheroeReducer';
import TabReducer from './TabReducer';
import dataReduces from './dataReduces';
import locationReducer from './location';
import localStorage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';
import { persistReducer } from 'redux-persist';
import { firebaseReducer as firebase } from 'react-redux-firebase';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase'
export default combineReducers({
    firebase: persistReducer(
        { key: 'firebaseState', storage: localStorage, stateReconciler: hardSet },
        firebase
    ),
    location: locationReducer,
    superheroes: superheroeReducer,
    tabId: TabReducer,
    dataReducer: dataReduces,
});