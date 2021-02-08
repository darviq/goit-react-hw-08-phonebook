import {signIn, changeLoadingStatus, setError} from "../reducers/authReducer";
import axios from "axios";

const baseURL = "https://identitytoolkit.googleapis.com/v1";
const apiKey = "AIzaSyDohlpLjI8jw0GUGaYJFlhb02jgBwdhXC4";

export const signUpOperation = data => dispatch => {
    dispatch(changeLoadingStatus());
    axios
        .post(`${baseURL}/accounts:signUp?key=${apiKey}`, {...data, returnSecureToken: true})
        .then(response => dispatch(signIn(response.data)))
        .catch(error => dispatch(setError(error)))
        .finally(() => dispatch(changeLoadingStatus()));
};

export const signInOperation = data => dispatch => {
    dispatch(changeLoadingStatus());
    axios
        .post(`${baseURL}/accounts:signInWithPassword?key=${apiKey}`, {...data, returnSecureToken: true})
        .then(response => dispatch(signIn(response.data)))
        .catch(error => dispatch(setError(error)))
        .finally(() => dispatch(changeLoadingStatus()));
};
