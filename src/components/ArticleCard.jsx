import CommentsCard from "./CommentsCard";
import { fetchArticlesById } from "../../utils/api";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function ArticleCard() {
  const params = useParams();
  const { article_id } = useParams();
  const [article, setArticle] = useState();

  useEffect(() => {
    fetchArticlesById(article_id).then((articleData) => {
      setArticle(articleData.article);
    });
  }, [article_id]);

  if (!article) {
    return <div>Article loading, please wait.</div>;
  }

  return (
    <>
      {/* <div className="ArticleCard card"></div> */}
      <h2>{article.title}</h2>
      <img src={article.article_img_url} alt="" className="ArticleImage" />
      <p>Topic: {article.topic[0].toUpperCase() + article.topic.slice(1)}</p>
      <h3>Author: {article.author}</h3>
      <p>{article.body}</p>
      <button className="ArticleVoteButton">
        Up Votes: {article.votes} ⬆️
      </button>
      <CommentsCard />
    </>
  );
}
