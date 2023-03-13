import axios from "axios";
const API_URL = "http://localhost:8080/api/user";

class AuthService {
  async login(email, password) {
    return axios.post(API_URL + "/login", { email, password }).catch((err) => {
      throw err;
    });
  }

  logout() {
    localStorage.removeItem("user");
  }

  async register(username, email, password) {
    return axios
      .post(API_URL + "/register", {
        username,
        email,
        password,
      })
      .catch((err) => {
        throw err;
      });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
}

export default new AuthService();
