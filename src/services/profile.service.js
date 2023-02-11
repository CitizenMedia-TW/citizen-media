import axios from "axios";
const API_URL = "http://localhost:8080/api/profile";

class ProfileService {
  myStories() {
    let token;
    if (localStorage.getItem("user")) {
      token = JSON.parse(localStorage.getItem("user")).token;
    } else {
      token = "";
    }
    return axios.get(API_URL + "/my-stories", {
      headers: { Authorization: token },
    });
  }
}

export default new ProfileService();
