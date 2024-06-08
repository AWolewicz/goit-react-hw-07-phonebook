import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://6662b56162966e20ef09a1d3.mockapi.io/contacts"

export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get("/contacts");
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    });

export const addContact = createAsyncThunk(
    "contacts/addContact",
    async ({name, phone}, thunkAPI) => {
        try {
            const response = await axios.post("/contacts", { name, phone })
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const deleteContacts = createAsyncThunk(
    "contacts/deleteContact",
    async (id, thunkAPI) => {
        try {
            const response = await axios.delete(`/contacts/${id}`);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);