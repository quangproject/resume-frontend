import { WorkExperience } from "../type";

export const SET_WORK_EXPERIENCES = "SET_WORK_EXPERIENCES";

export interface workExperiencesActions {
  type: string;
  payload: WorkExperience[];
}

export const setWorkExperiences = (workExperiences: WorkExperience[]) => ({
  type: SET_WORK_EXPERIENCES,
  payload: workExperiences
});
