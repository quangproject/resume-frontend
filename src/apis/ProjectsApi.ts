import axiosClient from "./axiosClient";

class ProjectsApi {
  private readonly API_URL = "/api/backend/projects";

  getByUserId() {
    const url = `${this.API_URL}`;
    return axiosClient.get(url);
  }
}

export default new ProjectsApi();
