import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContacts } from './operations';

const contactInitialState = {
    items: [],
    isLoading: false,
    error: null,
};

const contactSlice = createSlice({
    name: 'contact',
    initialState: contactInitialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchContacts.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.items = action.payload;
            })
            .addCase(fetchContacts.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(addContact.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(addContact.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.items.push(action.payload);
            })
            .addCase(addContact.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(deleteContacts.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(deleteContacts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                const index = state.items.findIndex(contact => contact.id === action.payload.id);
                state.items.splice(index, 1);
            })
            .addCase(deleteContacts.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    },
})


export const contactReducer = contactSlice.reducer