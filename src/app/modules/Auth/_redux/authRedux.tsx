import { any } from "prop-types";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { put, takeLatest } from "redux-saga/effects";
import { getUserByToken } from "./authCrud";

export const actionTypes = {
  Login: "[Login] Action",
  Logout: "[Logout] Action",
  Register: "[Register] Action",
  UserRequested: "[Request User] Action",
  UserLoaded: "[Load User] Auth API",
  SetUser: "[Set User] Action",
};

const initialAuthState = {
  user: undefined,
  authToken: undefined,
};

export const reducer = persistReducer(
  { storage, key: "v713-demo1-auth", whitelist: ["user", "authToken"] },
  function (state = initialAuthState, action): any {
    switch (action.type) {
      case actionTypes.Login: {
        console.log('action' + action.type);
        // const { authToken } = action.payload;
        const { authToken } = action.type;
        return { authToken, user: undefined };
      }

      case actionTypes.Register: {
        console.log('action' + action.type);
        // const { authToken } = action.payload;
        const { authToken } = action.type;
        return { authToken, user: undefined };
      }

      case actionTypes.Logout: {
        // TODO: Change this code. Actions in reducer aren't allowed.
        return initialAuthState;
      }

      case actionTypes.UserLoaded: {
        const { user } = action.type;
        // const { user } = action.payload;
        return { ...initialAuthState, user };
      }

      case actionTypes.SetUser: {
        // const { user } = action.payload;
        const {user} = action.type;
        return { ...initialAuthState, user };
      }

      default:
        return state;
    }
  }
);

export const actions = {
  login: (authToken: any) => ({ type: actionTypes.Login, payload: { authToken } }),
  register: (authToken: any) => ({
    type: actionTypes.Register,
    payload: { authToken },
  }),
  logout: () => ({ type: actionTypes.Logout }),
  requestUser: (user: any) => ({
    type: actionTypes.UserRequested,
    payload: { user },
  }),
  fulfillUser: (user: any) => ({ type: actionTypes.UserLoaded, payload: { user } }),
  setUser: (user: any) => ({ type: actionTypes.SetUser, payload: { user } }),
};

export function* saga() {
  yield takeLatest(actionTypes.Login, function* loginSaga() {
    yield put(actions.requestUser({user:any}));
  });

  yield takeLatest(actionTypes.Register, function* registerSaga() {
    yield put(actions.requestUser({user:any}));
  });

  yield takeLatest(actionTypes.UserRequested, function* userRequested() {
    const { data: user } = yield getUserByToken();

    yield put(actions.fulfillUser(user));
  });
}
