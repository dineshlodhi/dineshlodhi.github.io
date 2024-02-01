import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    city: "",
    country: null,
    summary: "",
};

const infoSlice = createSlice({
    name: "info",
    initialState,
    reducers: {
        saveInfo: (state, { payload }) => {
            state.firstName = payload.firstName;
            state.lastName = payload.lastName;
            state.phone = payload.phone;
            state.email = payload.email;
            state.city = payload.city;
            state.country = payload.country;
            state.summary = payload.summary;
        },
    },
});

export const { saveInfo } = infoSlice.actions;
export default infoSlice.reducer;
