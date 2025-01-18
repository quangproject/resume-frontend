import { SET_SKILLS, skillsActions } from "../actions/skillsActions";
import { UserSkill } from "../type";

const initialState: UserSkill[] = [];

const skillsReducer = (state = initialState, action: skillsActions) => {
  switch (action.type) {
    case SET_SKILLS:
      return action.payload;
    default:
      return state;
  }
};

export default skillsReducer;
