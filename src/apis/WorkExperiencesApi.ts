import axiosClient from "./axiosClient";

class WorkExperienceApi {
  private readonly API_URL = "/api/work-experiences";

  getAll() {
    const url = this.API_URL;
    return axiosClient.get(url);
  }

  getByUserId(userId: string) {
    const url = `${this.API_URL}/${userId}/user`;
    return axiosClient.get(url);
  }
}

export default new WorkExperienceApi();
