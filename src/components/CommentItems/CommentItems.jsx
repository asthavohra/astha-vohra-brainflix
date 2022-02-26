import "./CommentItems.scss";

// Calculate how long ago was the comment posted
{
  /*
const timeAgo = (timestamp) => {
  let date = new Date(timestamp);
  let today = new Date();
  let seconds = Math.round((today - date) / 1000);
  let minutes = Math.round(seconds / 60);
  let hours = Math.round(minutes / 60);

  if (seconds < 10) {
    return `Now`;
  } else if (seconds < 60) {
    return `${seconds} seconds ago`;
  } else if (seconds < 90) {
    return `A minute ago`;
  } else if (minutes < 60) {
    return `${minutes} minutes ago`;
  } else if (hours < 2) {
    return `An hour ago`;
  } else if (hours < 24) {
    return `${hours} hours ago`;
  } else {
    return timestampToDate(timestamp);
  }
};

// Transform timestamp in a date format MM/DD/YYYY
const timestampToDate = (timestamp) => {
  let date = new Date(timestamp);

  let dd = date.getDate();
  let mm = date.getMonth() + 1;
  let yyyy = date.getFullYear();

  if (dd < 10) {
    dd = "0" + dd;
  }

  if (mm < 10) {
    mm = "0" + mm;
  }

  return (date = mm + "/" + dd + "/" + yyyy);
};
*/
}
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
                    {new Date(comment.timestamp).toLocaleDateString()}
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
