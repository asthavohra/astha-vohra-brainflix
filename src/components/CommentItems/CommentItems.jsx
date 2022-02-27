import "./CommentItems.scss";
import moment from "moment";

function CommentItems({ comments }) {
  return (
    <>
      {comments.map((comment) => {
        return (
          <article className="comment" key={comment.timestamp}>
            <div className="comment__left">
              {/* Insert Avatar Component instead of code below for next sprint */}
              <div className="avatar-mobile">
                {/* <img src={avatar} className="avatar" alt="Avatar"/> */}
              </div>
              <div className="avatar-container">
                {/* <img src={avatar} className="avatar" alt="Avatar"/> */}
              </div>
            </div>
            <div className="comment__right">
              <div className="comment__right__main">
                <div className="comment__right__main__name">
                  <h3 className="comment__right__main__name__text">
                    {comment.name}
                  </h3>
                </div>
                <div className="comment__right__main__timestamp">
                  <p className="comment__right__main__timestamp__text">
                    {moment(comment.timestamp).fromNow()}
                  </p>
                </div>
              </div>
              <div>
                <p className="comment__text">{comment.comment}</p>
              </div>
            </div>
          </article>
        );
      })}
    </>
  );
}

export default CommentItems;
