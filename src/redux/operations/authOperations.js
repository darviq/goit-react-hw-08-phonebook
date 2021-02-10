import {signIn, changeLoadingStatus, setError} from "../reducers/authReducer";
import axios from "axios";

export const signUpOperation = data => dispatch => {
    dispatch(changeLoadingStatus());
    axios
        .post(process.env.REACT_APP_SIGNUP_URL, {...data, returnSecureToken: true})
        .then(response => dispatch(signIn(response.data)))
        .catch(error => dispatch(setError(error)))
        .finally(() => dispatch(changeLoadingStatus()));
};

export const signInOperation = data => dispatch => {
    dispatch(changeLoadingStatus());
    axios
        .post(process.env.REACT_APP_SIGNIN_URL, {...data, returnSecureToken: true})
        .then(response => dispatch(signIn(response.data)))
        .catch(error => dispatch(setError(error)))
        .finally(() => dispatch(changeLoadingStatus()));
};
