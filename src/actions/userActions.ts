import { User } from "../type";

export const SET_USER = "SET_USER";

export interface userActions {
  type: string;
  payload: User;
}

export const setUser = (user: User) => ({
  type: SET_USER,
  payload: user
});
