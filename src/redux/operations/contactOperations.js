import {addContact, loadContacts, removeContact} from "../reducers/contactsReducer";
import {changeLoadingStatus} from "../reducers/loadingReducer";
import {setError} from "../reducers/errorsReducer";
import axios from "axios";

const baseURL = "https://phonebook-aed1e-default-rtdb.firebaseio.com";

export const addContactOperation = contact => dispatch => {
    dispatch(changeLoadingStatus());
    axios
        .post(`${baseURL}/contacts.json`, {...contact})
        .then(response => dispatch(addContact({...contact, id: response.data.name})))
        .catch(error => dispatch(setError(error)))
        .finally(() => dispatch(changeLoadingStatus()));
};

export const loadContactsOperation = () => dispatch => {
    dispatch(changeLoadingStatus());
    axios
        .get(`${baseURL}/contacts.json`)
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

export const removeContactOperation = id => dispatch => {
    dispatch(changeLoadingStatus());
    axios
        .delete(`${baseURL}/contacts/${id}.json`)
        .then(() => dispatch(removeContact(id)))
        .catch(error => dispatch(setError(error)))
        .finally(() => dispatch(changeLoadingStatus()));
};
