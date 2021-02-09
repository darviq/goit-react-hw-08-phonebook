import axios from "axios";
import {addContact, loadContacts, clearContacts, removeContact, changeLoadingStatus, setError} from "../reducers/contactsReducer";

const baseURL = "https://finalphonebook-default-rtdb.firebaseio.com";

export const addContactOperation = contact => (dispatch, getState) => {
    const uid = getState().auth.uid;
    const idToken = getState().auth.idToken;
    dispatch(changeLoadingStatus());
    axios
        .post(`${baseURL}/contacts/${uid}.json?auth=${idToken}`, {...contact})
        .then(response => dispatch(addContact({...contact, id: response.data.name})))
        .catch(error => dispatch(setError(error)))
        .finally(() => dispatch(changeLoadingStatus()));
};

export const loadContactsOperation = () => (dispatch, getState) => {
    const uid = getState().auth.uid;
    const idToken = getState().auth.idToken;
    dispatch(changeLoadingStatus());
    axios
        .get(`${baseURL}/contacts/${uid}.json?auth=${idToken}`)
        .then(response => {
            if (response.data) {
                const contacts = Object.keys(response.data).map(key => ({
                    ...response.data[key],
                    id: key,
                }));
                dispatch(loadContacts(contacts));
            } else dispatch(clearContacts());
        })
        .catch(error => dispatch(setError(error)))
        .finally(() => dispatch(changeLoadingStatus()));
};

export const removeContactOperation = id => (dispatch, getState) => {
    const uid = getState().auth.uid;
    const idToken = getState().auth.idToken;
    dispatch(changeLoadingStatus());
    axios
        .delete(`${baseURL}/contacts/${uid}/${id}.json?auth=${idToken}`)
        .then(() => dispatch(removeContact(id)))
        .catch(error => dispatch(setError(error)))
        .finally(() => dispatch(changeLoadingStatus()));
};
