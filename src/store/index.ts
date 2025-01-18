import { createStore, combineReducers } from "redux";
import userReducer from "../reducers/userReducer";
import projectsReducer from "../reducers/projectsReducer";
import workExperiencesReducer from "../reducers/workExperiencesReducer";
import educationsReducer from "../reducers/educationsReducer";
import skillsReducer from "../reducers/skillsReducer";

const rootReducer = combineReducers({
  user: userReducer,
  projects: projectsReducer,
  workExperiences: workExperiencesReducer,
  educations: educationsReducer,
  skills: skillsReducer
});

const store = createStore(rootReducer);

export default store;
export type RootState = ReturnType<typeof rootReducer>;
