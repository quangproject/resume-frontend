import axiosClient from "./axiosClient";

class EducationApi {
  private readonly API_URL = "/api/educations";

  getAll() {
    const url = this.API_URL;
    return axiosClient.get(url);
  }

  getByUserId(userId: string) {
    const url = `${this.API_URL}/${userId}/user`;
    return axiosClient.get(url);
  }
}

export default new EducationApi();
