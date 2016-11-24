import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import createLogger = require('redux-logger');
const logger = (createLogger as any)();

const store = createStore(
  rootReducer,
  applyMiddleware(logger)
)

export default store;