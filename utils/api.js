import axios from "axios";

const api = axios.create({
  baseURL: "https://gabnbar.onrender.com/api/",
  timeout: 2000,
});

export function fetchArticles() {
  return api
    .get("/articles")
    .then(({ data }) => {
      // console.log(data);
      return data.articles;
    })
    .catch((err) => {
      console.log(err);
    });
}

export const fetchArticlesById = (article_id) => {
  return api.get(`/articles/${article_id}`).then((res) => {
    // console.log(res.data);
    return res.data;
  });
};

export const fetchCommentsByArticle = (article_id) => {
  return api.get(`/${article_id}/comments`).then((res) => {
    console.log(res.data);
    return res.data;
  });
};
