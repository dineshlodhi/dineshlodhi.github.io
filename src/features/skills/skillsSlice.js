import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    skills: [],
};

const skillsSlice = createSlice({
    name: "skills",
    initialState,
    reducers: {
        saveSkills: (state, { payload }) => {
            state.skills = payload.skills;
        },
    },
});

export const { saveSkills } = skillsSlice.actions;
export default skillsSlice.reducer;
