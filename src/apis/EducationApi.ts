import axiosClient from "./axiosClient";

class EducationApi {
  getAll() {
    const url = "/api/education";
    return axiosClient.get(url);
  }
}

export default new EducationApi();
