import {createAction} from "@reduxjs/toolkit";
import {createReducer} from "@reduxjs/toolkit";
import {contacts} from "../actionTypes/actionTypes";

export const addContact = createAction(contacts.add);
export const loadContacts = createAction(contacts.load);
export const removeContact = createAction(contacts.remove);

const contactsReducer = createReducer([], {
    [addContact]: (state, {payload}) => (state = [...state, {...payload}]),
    [loadContacts]: (state, {payload}) => (state = [...payload]),
    [removeContact]: (state, {payload}) => (state = [...state.filter(contact => contact.id !== payload)]),
});

export default contactsReducer;
