import { Project } from "../type";

export const SET_PROJECTS = "SET_PROJECTS";

export interface projectsActions {
  type: string;
  payload: Project[];
}

export const setProjects = (projects: Project[]) => ({
  type: SET_PROJECTS,
  payload: projects
});
