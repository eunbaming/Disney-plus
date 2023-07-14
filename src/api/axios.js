import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "bab42a3ab106cfb11ff0c056ecf46024",
    language: "Ko-KR",
  },
});

export default instance;
