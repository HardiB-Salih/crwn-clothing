import { all, call } from "redux-saga/effects";
import { catogariesSaga } from "./catogaries/catogaries.action";
import { userSagas } from "./user/user.saga";

export function* rootSaga() {
  yield all([call(catogariesSaga), call(userSagas)]);
}
