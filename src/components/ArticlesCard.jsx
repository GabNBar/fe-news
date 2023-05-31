import { useState, useEffect } from "react";
import { fetchArticles } from "../../utils/api";

export default function ArticlesCard() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles().then((data) => {
      console.log(data);
      setArticles(data);
    });
  }, []);

  if (!articles) {
    return <div>The page is loading, please wait.</div>;
  }

  return (
    <div className="ArticlesCard card">
      <h2 className="CardTitle">Articles</h2>
      {articles.map((article) => (
        <div key={article.article_id} className="ArticleItem">
          <h2 className="ArticleTitle">{article.title}</h2>
          <img src={article.article_img_url} alt="" className="ArticleImage" />
          <h3 className="ArticleAuthor">By: {article.author}</h3>
          <p className="ArticleCreatedAt">Created At: {article.created_at}</p>
          <button className="ArticleVoteButton">{article.votes} ❤️</button>
          <div className="ArticleCommentsCount">
            Comments: {article.comment_count}
          </div>
        </div>
      ))}
    </div>
  );
}