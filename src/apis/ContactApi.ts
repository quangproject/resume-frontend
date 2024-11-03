import { ContactForm } from "../type";
import axiosClient from "./axiosClient";

class ContactApi {
  getAll() {
    const url = "/api/contacts";
    return axiosClient.get(url);
  }

  save(data: ContactForm) {
    const url = `/api/contacts`;
    return axiosClient.post(url, data);
  }
}

export default new ContactApi();
