import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import counterReducer from '../reducers/reducers';

const persistConfig = {
  key: 'root',
  storage: storage, // defaults to localStorage for web
  whitelist: ['counter'], // Persist only the 'counter' slice of state
};

const rootReducer = combineReducers({
  counter: counterReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
