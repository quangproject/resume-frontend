import axiosClient from "./axiosClient";

class EducationsApi {
  private readonly API_URL = "/api/backend/educations";

  getByUserId() {
    const url = `${this.API_URL}`;
    return axiosClient.get(url);
  }
}

export default new EducationsApi();
