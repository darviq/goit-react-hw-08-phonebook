import {createAction} from "@reduxjs/toolkit";
import {createReducer} from "@reduxjs/toolkit";
import {loading} from "../actionTypes/actionTypes";

export const changeLoadingStatus = createAction(loading.change);

const loadingReducer = createReducer(false, {
    [changeLoadingStatus]: state => (state = !state),
});

export default loadingReducer;
