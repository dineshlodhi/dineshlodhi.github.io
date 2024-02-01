import { configureStore } from "@reduxjs/toolkit";
import infoReducer from "./features/info/infoSlice";
import workReducer from "./features/work/workSlice";
import educationReducer from "./features/education/educationSlice";
import skillsReducer from "./features/skills/skillsSlice";
import interestsReducer from "./features/interests/interestsSlice";
import stepperReducer from "./features/stepper/stepperSlice";

export const store = configureStore({
  reducer: {
    info: infoReducer,
    work: workReducer,
    education: educationReducer,
    skills: skillsReducer,
    interests: interestsReducer,
    stepper: stepperReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
