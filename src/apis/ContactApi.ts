import { ContactForm } from "../type";
import axiosClient from "./axiosClient";

class ContactApi {
  private readonly API_URL = "/api/backend/contacts";

  save(data: ContactForm) {
    const url = this.API_URL;
    return axiosClient.post(url, data);
  }
}

export default new ContactApi();
