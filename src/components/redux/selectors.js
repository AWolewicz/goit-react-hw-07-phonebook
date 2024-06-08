import { createSelector } from '@reduxjs/toolkit';

export const getContact = state => (state.contacts && state.contacts.items) ? state.contacts.items : [];
export const getFilter = state => state.filters.status;
export const getIsLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;

export const getVisibleContacts = createSelector(
  [getContact, getFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);