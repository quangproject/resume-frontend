import { projectsActions, SET_PROJECTS } from "../actions/projectsActions";
import { Project } from "../type";

const initialState: Project[] = [];

const projectsReducer = (state = initialState, action: projectsActions) => {
  switch (action.type) {
    case SET_PROJECTS:
      return action.payload;
    default:
      return state;
  }
};

export default projectsReducer;
