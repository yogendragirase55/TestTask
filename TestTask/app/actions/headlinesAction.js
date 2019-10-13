export const GET_HEADLINES_REQUEST = 'GET_HEADLINES_REQUEST';
export const GET_HEADLINES_SUCCESS = 'GET_HEADLINES_SUCCESS';
export const GET_HEADLINES_FAILURE = 'GET_HEADLINES_FAILURE';

export const getHeadlinesRequest = (search) => ({
  type: GET_HEADLINES_REQUEST,
  search,
});

export const getHeadlinesSuccess = (data) => ({
  type: GET_HEADLINES_SUCCESS,
  data,
});

export const getHeadlinesFailure = () => ({
  type: GET_HEADLINES_FAILURE,
});
