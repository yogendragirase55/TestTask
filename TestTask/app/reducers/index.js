// @flow
import { combineReducers } from 'redux';
import loaderReducers from './loaderReducers';
import getHeadLinesReducer from './getHeadLinesReducer';

const appReducer = combineReducers({
  loaderReducers,
  getHeadLinesReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
