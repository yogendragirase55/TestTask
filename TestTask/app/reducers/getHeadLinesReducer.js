import { GET_HEADLINES_SUCCESS, GET_HEADLINES_FAILURE} from '../actions/headlinesAction';

const initialState = {
  getHeadLinesResponse: {},
  getHeadLinesList: [],
};

function getHeadLinesReducer(state = initialState, action) {
  if (action.type === 'undefined') {
    return state;
  }

  switch (action.type) {
    case GET_HEADLINES_SUCCESS:
      console.log("HEADLINE DATA====>", action.data)
      return {
        ...state,
        getHeadLinesResponse: action.data,
      };
    case GET_HEADLINES_FAILURE:
      return {
        ...state,
        getHeadLinesResponse: {},
      };
    default:
      return state;
  }
}

export default getHeadLinesReducer;
