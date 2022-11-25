import {createStore,applyMiddleware} from "redux";
import rootReducer from './rootReducer';
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import {compact} from "lodash";
import AsyncStorage from '@react-native-async-storage/async-storage';


const persistConfig = {
    key: 'app',
    storage: AsyncStorage,
    whitelist: ['authReducer']
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware =compact([
    thunk.withExtraArgument()
]);


export const store = createStore( persistedReducer,applyMiddleware(...middleware));
export const persistor = persistStore(store)