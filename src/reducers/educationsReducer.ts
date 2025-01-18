import {
  educationsActions,
  SET_EDUCATIONS
} from "../actions/educationsActions";
import { Education } from "../type";

const initialState: Education[] = [];

const educationsReducer = (state = initialState, action: educationsActions) => {
  switch (action.type) {
    case SET_EDUCATIONS:
      return action.payload;
    default:
      return state;
  }
};

export default educationsReducer;
