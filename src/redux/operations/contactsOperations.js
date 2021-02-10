import axios from "axios";
import {addContact, loadContacts, removeContact, changeLoadingStatus, setError} from "../reducers/contactsReducer";

export const addContactOperation = contact => (dispatch, getState) => {
    const uid = getState().auth.uid;
    const idToken = getState().auth.idToken;
    dispatch(changeLoadingStatus());
    axios
        .post(`${process.env.REACT_APP_BASE_URL}/contacts/${uid}.json?auth=${idToken}`, {...contact})
        .then(response => dispatch(addContact({...contact, id: response.data.name})))
        .catch(error => dispatch(setError(error)))
        .finally(() => dispatch(changeLoadingStatus()));
};

export const loadContactsOperation = () => (dispatch, getState) => {
    const uid = getState().auth.uid;
    const idToken = getState().auth.idToken;
    dispatch(changeLoadingStatus());
    axios
        .get(`${process.env.REACT_APP_BASE_URL}/contacts/${uid}.json?auth=${idToken}`)
        .then(response => {
            if (response.data) {
                const contacts = Object.keys(response.data).map(key => ({
                    ...response.data[key],
                    id: key,
                }));
                dispatch(loadContacts(contacts));
            }
        })
        .catch(error => dispatch(setError(error)))
        .finally(() => dispatch(changeLoadingStatus()));
};

export const removeContactOperation = id => (dispatch, getState) => {
    const uid = getState().auth.uid;
    const idToken = getState().auth.idToken;
    dispatch(changeLoadingStatus());
    axios
        .delete(`${process.env.REACT_APP_BASE_URL}/contacts/${uid}/${id}.json?auth=${idToken}`)
        .then(() => dispatch(removeContact(id)))
        .catch(error => dispatch(setError(error)))
        .finally(() => dispatch(changeLoadingStatus()));
};
