import axiosClient from "./axiosClient";

class SkillApi {
  private readonly API_URL = "/api/skills";

  getAll() {
    const url = this.API_URL;
    return axiosClient.get(url);
  }

  getByUserId(userId: string) {
    const url = `${this.API_URL}/${userId}/user`;
    return axiosClient.get(url);
  }
}

export default new SkillApi();
