import { createSlice } from "@reduxjs/toolkit";

const experience = {
    title: "",
    orgranization: "",
    city: "",
    country: "",
    startDate: "",
    endDate: "",
    description: "",
};

const initialState = {
    experience: [experience],
};

const workSlice = createSlice({
    name: "work",
    initialState,
    reducers: {
        saveWork: (state, { payload }) => {
            state.experience = payload.work;
        },
    },
});

export const { saveWork } = workSlice.actions;
export default workSlice.reducer;




