import { takeEvery, call, put, cancel, all } from "redux-saga/effects";
import API from "../api";
import * as actions from "../actions";

function* watchDroneLocation(action) {
  while (true) {
    const { error, data } = yield call(API.fetchDroneData);
    if (error) {
      console.log({ error });
      yield put({ type: actions.API_ERROR, code: error.code });
      yield cancel();
      return;
    }
    yield put({ type: actions.DRONE_DATA_RECEIVED, data });
  }
}

function* watchAppLoad() {
  yield all([takeEvery(actions.FETCH_DRONE_DATA, watchDroneLocation)]);
}

export default [watchAppLoad];
