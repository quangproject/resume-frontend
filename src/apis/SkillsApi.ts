import axiosClient from "./axiosClient";

class SkillApi {
  private readonly API_URL = "/api/backend/skills";

  getByUserId() {
    const url = `${this.API_URL}`;
    return axiosClient.get(url);
  }
}

export default new SkillApi();
