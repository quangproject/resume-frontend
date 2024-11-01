import axiosClient from "./axiosClient";

class SkillApi {
  getAll() {
    const url = "/api/skills";
    return axiosClient.get(url);
  }
}

export default new SkillApi();
