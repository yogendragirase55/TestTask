import {
  call, takeLatest, put, all,
} from 'redux-saga/effects';
import { apiCall } from '../../api/apiInterface';

import {
  GET_HEADLINES_REQUEST,
  getHeadlinesSuccess,
  getHeadlinesFailure,
} from '../../actions/headlinesAction';

import {
  showLoader,
  hideLoader,
} from '../../actions/loaderActions';

import {
  getHeadlinesUrl,
} from '../../api/urls';

import {
  METHOD_TYPE,
  isSuccessAPI,
  parsedAPIResponse,
  showErrorMessage,
  showExceptionErrorMessage,
} from '../APIHandler';
import { showPopupAlertWithTitle } from '../../utils/showAlert';

// get Headlines
function* getHeadlines(action) {
  try {
    yield put(showLoader());
    const url = getHeadlinesUrl(action.search);
    const response = yield call(
      apiCall,
      url,
      METHOD_TYPE.GET,
    );
    yield put(hideLoader());
    const parsedResponse = yield call(parsedAPIResponse, response);
    if (isSuccessAPI(response) && parsedResponse) {
      let dataResponse = {};
      dataResponse = parsedResponse;
      yield put(getHeadlinesSuccess(dataResponse));
    } else {
      yield put(getHeadlinesFailure(parsedResponse));
      showErrorMessage(response, parsedResponse);
    }
  } catch (error) {
    yield put(hideLoader());
    showExceptionErrorMessage();
    yield put(getHeadlinesFailure());
  }
}


export default function* headlinesSaga() {
  yield all([
    takeLatest(GET_HEADLINES_REQUEST, getHeadlines),
  ]);
}
