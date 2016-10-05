import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { hashHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers';

import dragndropMiddleware from './middleware/dragndrop';
import dragndropGenerator from './generators/dragndrop';

const router = routerMiddleware(hashHistory);

const enhancer = applyMiddleware(thunk, router, dragndropMiddleware);

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, enhancer);
  dragndropGenerator(store);
  return store;
}
