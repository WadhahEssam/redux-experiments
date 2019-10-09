import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from './store/middleware/logger'
import monitorReducerEnhancer from './store/enhancers/monitorReducer'
import rootReducer from './store/reducers';
import App from './App';
import './index.css';

const middlewareEnhancer = applyMiddleware(loggerMiddleware, thunkMiddleware);
const composedEnhancers = compose(middlewareEnhancer, monitorReducerEnhancer);
const store = createStore(rootReducer, undefined, composedEnhancers);

render(<Provider
  store={store}><App />
</Provider>, document.getElementById('root'));
