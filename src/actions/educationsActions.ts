import { Education } from "../type";

export const SET_EDUCATIONS = "SET_EDUCATIONS";

export interface educationsActions {
  type: string;
  payload: Education[];
}

export const setEducations = (educations: Education[]) => ({
  type: SET_EDUCATIONS,
  payload: educations
});
