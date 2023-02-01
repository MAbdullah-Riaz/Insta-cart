import { compose, createStore, applyMiddleware } from 'redux';
// import logger from 'redux-logger';

import { rootReducer } from './root-reducer';
import { persistStore, persistReducer } from 'redux-persist';

const loggerMiddleware = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }
  console.log('type: ', action.type);
  console.log('payload: ', action.payload);
  console.log('current', store.getState());
  next(action);
  console.log('next state: ', store.getState());
};
// const persistConfig = {
//     key:
// }

const middleWares = [loggerMiddleware];
const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composedEnhancers);
