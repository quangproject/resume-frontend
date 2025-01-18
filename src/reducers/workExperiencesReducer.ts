import {
  SET_WORK_EXPERIENCES,
  workExperiencesActions
} from "../actions/workExperiencesActions copy";
import { WorkExperience } from "../type";

const initialState: WorkExperience[] = [];

const workExperiencesReducer = (
  state = initialState,
  action: workExperiencesActions
) => {
  switch (action.type) {
    case SET_WORK_EXPERIENCES:
      return action.payload;
    default:
      return state;
  }
};

export default workExperiencesReducer;
