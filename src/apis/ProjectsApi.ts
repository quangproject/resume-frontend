import axiosClient from "./axiosClient";

class ProjectApi {
  getAll() {
    const url = "/api/projects";
    return axiosClient.get(url);
  }
}

export default new ProjectApi();
