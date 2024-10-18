import axios from "axios";

export default axios.create({
  baseURL:
    window.location.hostname === "localhost"
      ? "http://localhost:8080/api"
      : `http://${window.location.hostname}:8080/api`,
  headers: {
    "Content-type": "application/json",
  },
});
