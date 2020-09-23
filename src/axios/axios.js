import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-challenge-4786a.cloudfunctions.net/api",
  // http://localhost:5001/challenge-4786a/us-central1/api
});

export default instance;
