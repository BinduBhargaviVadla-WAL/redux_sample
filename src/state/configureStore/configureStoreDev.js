import React from 'react';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { setIsLoggedIn } from '../ducks/login/reducer';
import { createHashHistory } from 'history';
import {
  routerMiddleware,
  routerActions,
  connectRouter,
} from 'connected-react-router';

const history = createHashHistory();
const reducers = combineReducers({
  router: connectRouter(history),
  isLogin: setIsLoggedIn,
});
const middleware = [];
//Thunk middleware setup
middleware.push(thunk);
// Logging Middleware setUp
const logger = createLogger({
  level: 'info',
  collapsed: true,
});
middleware.push(logger);
// Router Middleware
const router = routerMiddleware(history);
middleware.push(router);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middleware))
);
export default store;
