import {createSelector} from "@reduxjs/toolkit";

const getContacts = state => state.contacts.items;

const getLoadingStatus = state => state.contacts.loading;

const getFilter = state => state.contacts.filter;

const getFilteredContacts = createSelector([getFilter, getContacts], (filter, contacts) => {
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
});

export default {getContacts, getLoadingStatus, getFilter, getFilteredContacts};
