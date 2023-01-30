import { getCatogeriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { createAction } from "../../utils/reducer/reducer.utils";
import { CATOGARIES_ACTION_TYPE } from "./catogaries.type";
import { takeLatest, all, call, put } from "redux-saga/effects";

export const fetchCatogariesStart = () =>
  createAction(CATOGARIES_ACTION_TYPE.FETCH_CATOGARIES_START);

export const fetchCatogariesSuccess = (catogariesArray) =>
  createAction(
    CATOGARIES_ACTION_TYPE.FETCH_CATOGARIES_SUCCESS,
    catogariesArray
  );

export const fetchCatogariesFailed = (error) =>
  createAction(CATOGARIES_ACTION_TYPE.FETCH_CATOGARIES_FAILED, error);

// We use this to load catogaryies using redux saga
export function* fetchCatogariesAsync() {
  try {
    const catogariesArray = yield call(getCatogeriesAndDocuments, "categories");
    yield put(fetchCatogariesSuccess(catogariesArray));
  } catch (error) {
    yield put(fetchCatogariesFailed(error));
  }
}

export function* onFetchCatogaries() {
  yield takeLatest(
    CATOGARIES_ACTION_TYPE.FETCH_CATOGARIES_START,
    fetchCatogariesAsync
  );
}

export function* catogariesSaga() {
  yield all([call(onFetchCatogaries)]);
}
