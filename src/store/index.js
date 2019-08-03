import { applyMiddleware, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from '../reducers';
import logger from 'redux-logger'

export default function configureStore() {
  const middlewares = [thunkMiddleware, logger]
  const middlewareEnhancer = applyMiddleware(...middlewares)
  const reduxDebugger = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
  const enhancers = [middlewareEnhancer, reduxDebugger]
  const composedEnhancers = compose(...enhancers)
  const store = createStore(reducers , undefined, composedEnhancers )

  return store
}

