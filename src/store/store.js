import { compose, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import storage from 'redux-persist/lib/storage';
import { rootReducer } from './root-reducer';
import { persistStore, persistReducer } from 'redux-persist';
import { loggerMiddleware } from './middleware/logger';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['user'],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

//we can import our own middleware if we want to that is available in middleware folder
const middleWares = [logger];
const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);
export const persistor = persistStore(store);
