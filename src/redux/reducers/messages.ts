import {
  GET_MESSAGES,
  GET_MESSAGES_FAILURE,
  GET_MESSAGES_SUCCESS,
} from '../actions/type';

const INITIAL_STATE: ReduxState = {
  isFetched: false,
  isLoading: false,
  data: [],
  error: false,
};

export const messages = (state = INITIAL_STATE, action: ReduxAction) => {
  switch (action.type) {
    case GET_MESSAGES:
      return {
        ...state,
        isFetched: true,
        isLoading: true,
        error: false,
        data: [],
      };
    case GET_MESSAGES_SUCCESS:
      return {
        ...state,
        isFetched: true,
        isLoading: false,
        error: false,
        data: action.payload,
      };
    case GET_MESSAGES_FAILURE:
      return {
        ...state,
        isFetched: true,
        isLoading: false,
        data: null,
        error: true,
        message: action.payload,
      };
    default:
      return state;
  }
};
