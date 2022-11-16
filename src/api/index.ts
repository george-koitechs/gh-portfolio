import axios from "axios";

export default axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  // headers: {
  //   Accept: "application/vnd.github+json",
  //   Authorization: import.meta.env.VITE_GITHUB_ACCESS_TOKEN,
  // },
});
