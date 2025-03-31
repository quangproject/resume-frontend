import axiosClient from "./axiosClient";

class WorkExperienceApi {
  private readonly API_URL = "/api/backend/work-experiences";

  getByUserId() {
    const url = `${this.API_URL}`;
    return axiosClient.get(url);
  }
}

export default new WorkExperienceApi();
