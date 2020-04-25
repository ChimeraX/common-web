import { applyMiddleware, combineReducers, createStore, Store } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

const reducer = combineReducers({
});

const loggerMiddleware = createLogger();

const store: Store = createStore(reducer, applyMiddleware(thunkMiddleware, loggerMiddleware));

export default store;
