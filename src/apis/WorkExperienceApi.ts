import axiosClient from "./axiosClient";

class WorkExperienceApi {
  getAll() {
    const url = "/api/work-experience";
    return axiosClient.get(url);
  }
}

export default new WorkExperienceApi();
