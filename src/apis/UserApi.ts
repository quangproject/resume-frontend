import axiosClient from "./axiosClient";

class UserApi {
  private readonly API_URL = "/api/backend/users";

  getUserInfo() {
    const url = `${this.API_URL}`;
    return axiosClient.get(url);
  }
}

export default new UserApi();
