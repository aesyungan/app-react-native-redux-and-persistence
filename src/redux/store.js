import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
//thunks  permite devolver una funcion 
import thunk from 'redux-thunk';
import reducers from './reduces';

const persistConfig = {
    key: 'root',
    storage: storage,
    stateReconciler: autoMergeLevel2 // see "Merge Process" section for details.
};
const pReducer = persistReducer(persistConfig, reducers);
const store = createStore(pReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
export default store;