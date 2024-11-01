import axiosClient from "./axiosClient";

class UserApi {
  getAll() {
    const url = "/api/users";
    return axiosClient.get(url);
  }

  getById(id: string) {
    const url = `/api/users/${id}`;
    return axiosClient.get(url);
  }
}

export default new UserApi();
