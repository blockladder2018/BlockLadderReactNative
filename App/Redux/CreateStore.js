import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

export default (rootReducer) => {
  const middleware = [];

  // redux-thunk
  middleware.push(thunk);

  // react-native-debugger
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const enhancers = composeEnhancers(applyMiddleware(...middleware));

  return createStore(rootReducer, enhancers);
};
