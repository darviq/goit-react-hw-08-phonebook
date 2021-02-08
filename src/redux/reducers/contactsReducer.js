import {createAction} from "@reduxjs/toolkit";
import {createReducer} from "@reduxjs/toolkit";
import {contacts} from "../actionTypes/actionTypes";

export const addContact = createAction(contacts.add);
export const loadContacts = createAction(contacts.load);
export const removeContact = createAction(contacts.remove);
export const changeFilter = createAction(contacts.changeFilter);
export const changeLoadingStatus = createAction(contacts.changeLoadingStatus);
export const setError = createAction(contacts.setError);

const initialState = {
    items: [],
    filter: "",
    error: null,
    loading: false,
};

const contactsReducer = createReducer(
    {...initialState},
    {
        [addContact]: (state, {payload}) => (state = {...state, items: [...state.items, {...payload}]}),
        [loadContacts]: (state, {payload}) => (state = {...state, items: [...payload]}),
        [removeContact]: (state, {payload}) => (state = {...state, items: [...state.items.filter(contact => contact.id !== payload)]}),
        [changeFilter]: (state, {payload}) => (state = {...state, filter: payload}),
        [changeLoadingStatus]: state => (state = {...state, loading: !state.loading}),
        [setError]: (state, {payload}) => (state = {...state, error: {...payload}}),
    }
);

export default contactsReducer;
