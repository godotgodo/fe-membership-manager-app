import { all } from 'axios';
import { takeEvery } from 'redux-saga/effects';
import { GET_MESSAGES } from '../actions/type';
import { getMessagesRequest } from './messages';

export default function* rootSaga() {
  yield all([
    takeEvery(GET_MESSAGES, getMessagesRequest),
    // takeEvery(...,...)
  ]);
}
