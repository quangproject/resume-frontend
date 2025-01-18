import { UserSkill } from "../type";

export const SET_SKILLS = "SET_SKILLS";

export interface skillsActions {
  type: string;
  payload: UserSkill[];
}

export const setSkills = (skills: UserSkill[]) => ({
  type: SET_SKILLS,
  payload: skills
});
