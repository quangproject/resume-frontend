import { SET_USER, userActions } from "../actions/userActions";
import { User } from "../type";

const initialState: User | null = null;

const userReducer = (state = initialState, action: userActions) => {
  switch (action.type) {
    case SET_USER:
      return action.payload;
    default:
      return state;
  }
};

export default userReducer;
