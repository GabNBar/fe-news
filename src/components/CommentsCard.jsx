import { fetchCommentsByArticle } from "../../utils/api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { formatCreatedAt } from "../../utils/helpers";

export default function CommentsCard() {
  const { article_id } = useParams();
  const [comments, setComments] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCommentsByArticle(article_id).then((commentsData) => {
      setLoading(false);
      setComments(commentsData.comments);
    });
  }, []);

  if (loading === true) {
    return <p>Comment section loading, please wait.</p>;
  }

  return (
    <>
      <h3>Comments Section</h3>

      {comments.map((comment) => (
        <div key={comment.comment_id}>
          <h5>Posted by: {comment.author}</h5>
          <p>{comment.body}</p>
          <p>Created at: {formatCreatedAt(comment.created_at)}</p>
          <div>
            <button> ❤️</button>
            &nbsp;
            <button>👎</button>
            &nbsp;
            <span>{comment.votes}</span>
          </div>
        </div>
      ))}
    </>
  );
}
