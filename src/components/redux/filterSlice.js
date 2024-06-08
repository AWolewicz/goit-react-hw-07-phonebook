import  { createSlice } from "@reduxjs/toolkit"

const filterInitialState = {status: '',};

const filterSlice = createSlice({
    name: "filter",
    initialState: filterInitialState,
    reducers: {
        setFilter(state, action) {
            state.status = action.payload;
            return state.status;
        }
    }
})

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer; 