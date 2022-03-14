import "./CommentItems.scss";
import moment from "moment";
import deleteIcon from "../../assets/icons/icon-delete.svg";
import { deleteComment } from "../../utils/api";
import { Component } from "react";
import { Link } from "react-router-dom";

class CommentItems extends Component {
  handleClick = (commentId) => {
    //calls the deleteComment function written api.js
    deleteComment(this.props.selectedEntry.id, commentId)
      .then((response) => {
        // //calling getVideoDetailsFromApi function defined in main.jsx
        this.props.getVideoDetails(this.props.selectedEntry.id);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  render() {
    {
      /* fetched comments from selected entry and keep it in a variable called comments */
    }
    const { comments } = this.props.selectedEntry;
    return (
      <>
        {comments
          .sort((a, b) => {
            return b.timestamp - a.timestamp;
          })
          .map((comment) => {
            return (
              <article className="comment" key={comment.id}>
                <div className="comment__left">
                  <div className="avatar-mobile"></div>

                  <div className="avatar-container"></div>
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
                  <div className="comment__text">
                    <p>{comment.comment}</p>
                  </div>
                  <div className="comment__right-buttons">
                    <Link>
                      <img
                        onClick={() => this.handleClick(comment.id)}
                        className="comment__like-btn"
                        src={deleteIcon}
                        alt="Delete Icon"
                      />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
      </>
    );
  }
}
export default CommentItems;
