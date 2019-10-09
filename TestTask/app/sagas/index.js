import { fork } from 'redux-saga/effects';
import { sagaMiddleware } from '../store';
import headlinesSaga from './Headline/headlinesSaga';

function* root() {
  yield fork(headlinesSaga);
}

const run = () => sagaMiddleware.run(root);

export default run;
