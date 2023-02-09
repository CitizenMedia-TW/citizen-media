import axios from "axios";
const API_URL = "http://localhost:8080/api/story";

class StoryService {
  newStory(title, story, description) {
    let token;
    if (localStorage.getItem("user")) {
      token = JSON.parse(localStorage.getItem("user")).token;
    } else {
      token = "";
    }
    return axios.post(
      API_URL,
      { title, story, description },
      { headers: { Authorization: token } }
    );
  }
}

export default new StoryService();
