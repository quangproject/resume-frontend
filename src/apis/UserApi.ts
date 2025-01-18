import axiosClient from "./axiosClient";

class UserApi {
  private readonly API_URL = "/api/users";

  getAll() {
    const url = this.API_URL;
    return axiosClient.get(url);
  }

  getById(id: string) {
    const url = `${this.API_URL}/${id}`;
    return axiosClient.get(url);
  }
}

export default new UserApi();
