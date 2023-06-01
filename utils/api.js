import axios from "axios";

const api = axios.create({
  baseURL: "https://gabnbar.onrender.com/api/",
});

export function fetchArticles() {
  return api
    .get("/articles")
    .then(({ data }) => {
      return data.articles;
    })
    .catch((err) => {
      console.log(err);
    });
}

export const fetchArticlesById = (article_id) => {
  return api.get(`/articles/${article_id}`).then((res) => {
    return res.data;
  });
};

export const fetchCommentsByArticle = (article_id) => {
  return api.get(`/${article_id}/comments`).then((res) => {
    return res.data;
  });
};

export function fetchTopics() {
  return api
    .get("/topics")
    .then(({ data }) => {
      return data.topics;
    })
    .catch((err) => {
      console.log(err);
    });
}

export function fetchArticlesByTopic(topic) {
  return api
    .get("/articles")
    .then(({ data }) => {
      return data.articles.filter((article) => article.topic === topic);
    })
    .catch((err) => {
      console.log(err);
    });
}
