import { fetchCommentsByArticle } from "../../utils/api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function CommentsCard() {
  const { article_id } = useParams();
  const [comments, setComments] = useState();
  const params = useParams();

  useEffect(() => {
    fetchCommentsByArticle(article_id).then((commentsData) => {
      // console.log(typeof commentsData.comments);
      setComments(commentsData.comments);
    });
  }, []);

  console.log(params, "params");
  console.log(comments, "comments");

  if (!comments) {
    return <div>Comment section loading, please wait.</div>;
  }

  return (
    <>
      <h3>Comments Section</h3>

      {comments.map((comment) => (
        <div key={comment.comment_id}>
          <h5>{comment.author}</h5>
          <p>{comment.body}</p>
          <p>{comment.created_at}</p>
          <div>
            <button> ❤️</button>
            <button>👎</button>
            <span>{comment.votes}</span>
          </div>
        </div>
      ))}
    </>
  );
}
