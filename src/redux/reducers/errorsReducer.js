import {createAction} from "@reduxjs/toolkit";
import {createReducer} from "@reduxjs/toolkit";
import {errors} from "../actionTypes/actionTypes";

export const setError = createAction(errors.set);

const errorsReducer = createReducer([], {
    [setError]: (state, {payload}) => (state = [...state, {...payload}]),
});

export default errorsReducer;
