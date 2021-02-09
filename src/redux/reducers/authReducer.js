import {createAction} from "@reduxjs/toolkit";
import {createReducer} from "@reduxjs/toolkit";
import {auth} from "../actionTypes/actionTypes";

export const signIn = createAction(auth.signIn);
export const logOut = createAction(auth.logOut);
export const changeLoadingStatus = createAction(auth.changeLoadingStatus);
export const setError = createAction(auth.setError);

const initialState = {
    email: "",
    idToken: "",
    uid: "",
    logged: false,
    loading: false,
    error: null,
};

const authReducer = createReducer(
    {...initialState},
    {
        [signIn]: (state, {payload}) =>
            (state = {
                ...state,
                email: payload.email,
                idToken: payload.idToken,
                uid: payload.localId,
                logged: true,
                error: null,
            }),
        [logOut]: state => (state = {...initialState}),
        [changeLoadingStatus]: state => (state = {...state, loading: !state.loading}),
        [setError]: (state, {payload}) => (state = {...state, error: {...payload}}),
    }
);

export default authReducer;
