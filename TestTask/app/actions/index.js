import { bindActionCreators } from 'redux';
import { store } from '../store';

import {
  getHeadlinesRequest,
  getHeadlinesSuccess,
  getHeadlinesFailure,
} from './headlinesAction';

const actions = {
  getHeadlinesRequest,
  getHeadlinesSuccess,
  getHeadlinesFailure,
};

export default bindActionCreators(actions, store.dispatch);
