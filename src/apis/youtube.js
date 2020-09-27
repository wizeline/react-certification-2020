import axios from "axios";

const KEY = "AIzaSyDYJVu8aH3B6BcGJz3tJCCu-wgoTuQUE4k";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 20,
    key: KEY,
  },
});
