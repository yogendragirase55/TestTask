// @flow
import { combineReducers } from 'redux';
import loaderReducers from './loaderReducers';

const appReducer = combineReducers({
  loaderReducers,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
