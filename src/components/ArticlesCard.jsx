import { useState, useEffect } from "react";
import { fetchArticles } from "../../utils/api";
import { Link } from "react-router-dom";
import { formatCreatedAt } from "../../utils/helpers";

export default function ArticlesCard() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles().then((data) => {
      setArticles(data);
    });
  }, []);

  if (!articles) {
    return <div>The page is loading, please wait.</div>;
  }

  return (
    <>
      {/* <div className="ArticlesCard card"> */}
      <h2 className="CardTitle">Articles</h2>
      {articles.map((article) => (
        <div key={article.article_id} className="ArticleItem">
          <Link to={`articles/${article.article_id}`}>
            <h2 className="ArticleTitle">{article.title}</h2>
            <img
              src={article.article_img_url}
              alt=""
              className="ArticleImage"
            />
            <h3 className="ArticleAuthor">By: {article.author}</h3>
            <p className="ArticleCreatedAt">
              Created at: {formatCreatedAt(article.created_at)}
            </p>
            <div className="ArticleCommentsCount">
              Comments: {article.comment_count}
            </div>
          </Link>
        </div>
      ))}
      {/* </div> */}
    </>
  );
}
