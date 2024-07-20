import { call, put } from 'redux-saga/effects';
import {
  GET_MESSAGES_FAILURE,
  GET_MESSAGES_SUCCESS,
} from '@redux/actions/type';
import axios from 'axios';
import { API_URL, config, handleApiError } from '@utils/api';
import { IExample } from '@redux/actions';

export function* getMessagesRequest(action: ReduxAction): Generator {
  try {
    const { userId } = action.payload as IExample;
    const response = (yield call(
      axios.get,
      `${API_URL}/messages/${userId}`,
      config,
    )) as ApiResponse;
    if (response.error) {
      throw new Error(response.message);
    }
    yield put({ type: GET_MESSAGES_SUCCESS, payload: response.data });
  } catch (error) {
    handleApiError(error, 'getMessages');
    yield put({ type: GET_MESSAGES_FAILURE, payload: error });
  }
}

// export function* sendMessagesRequest(action: ReduxAction): Generator {}
