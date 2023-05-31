import axios from "axios";

const api = axios.create({
  baseURL: "https://frontend-nc-news.onrender.com/api/",
  timeout: 2000,
});

export function fetchArticles() {
  return api
    .get("/articles")
    .then(({ data }) => {
      console.log(data);
      return data.articles;
    })
    .catch((err) => {
      console.log(err);
    });
}